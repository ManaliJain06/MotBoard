import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import {GridList, GridTile} from 'material-ui/GridList';
import '../css/single-motboard.css';
import Fav from 'material-ui/svg-icons/action/favorite-border';
import FavFilled from 'material-ui/svg-icons/action/favorite';
import Checkbox from 'material-ui/Checkbox';
import Bookmark from 'material-ui/svg-icons/action/bookmark-border';
import BookmarkFilled from 'material-ui/svg-icons/action/bookmark';
import {getPublicMotBoardAction, postLikesAction, addPublicBoardToPrivate} from '../actions';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 5,
        fontSize: '20px',
        iconSize: '30px',
    },
    icon:{
        fill: 'white',
        width: 30,
        height: 30,
    }
};
const customStyles = {
    content : {
        top                   : '80%',
        left                  : '50%',
        right                 : 'auto',
        width                 : '50%',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        opacity: 0.5
    }
};
const iconStyles = {
    marginRight: 24,
};

class Board extends Component{

    constructor(props){
        super(props);
        this.state = {
            ListOfMotBoards : [],
            checked: false,
            oldState: false
        };
        this.setBoards = this.setBoards.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
        // this.handleCheck = this.handleCheck.bind(this);
        this.updateCheck = this.updateCheck.bind(this);
    }
    state = {
        checked: false,
        pagination:[
            {
                pageNo : 1,
                ActiveStatus:'page-item active'
            },
            {
                pageNo : 2,
                ActiveStatus:'page-item'
            },
            {
                pageNo : 3,
                ActiveStatus:'page-item'
            }
        ]
    };

    componentDidMount(){
        this.props.getPublicMotBoardAction();
        setTimeout(this.setBoards, 1000);
    }
    updateCheck(callback) {
        let isChecked = !this.state.checked;
        this.setState({
            ...this.state,
            checked: isChecked
        }, callback);
    }
    setBoards(){
        let publicBoards = this.props.publicMotBoard;
        this.setState({
            ...this.state,
            ListOfMotBoards: publicBoards.boards
        })
    }
    // handleCheck(event, isInputChecked){
    //     if(isInputChecked){
    //         return true;
    //     } else{
    //         return false;
    //     }
    // }
    openModalError(){
        this.setState({
            showError: true });
    }
    closeModalError(){
        this.setState({
            showError: false });
    }
    openModalSignUpError(){
        this.setState({
            showModalError: true });
        // setTimeout(this.props.history.push('/signUp'),10000)
    }
    closeModalSignUpError(){
        this.setState({ showModalError: false });
    }
    showSignInPage(){
        this.setState({ showModalError: false });
        this.props.history.push('/SignIn');
    }
    openModalBillingSuccess() {
        this.setState({ showModalSuccess: true });
    }

    closeModalBillingSuccess() {
        this.setState({ showModalSuccess: true });
        this.props.history.push('/home');
    }

    pushimage(temp) {
        this.props.history.push({
            pathname: '/singlemotboard',
            state: {motBoardName: temp}
        })
    }

    addBoardToPersonal(tile){
        //API to add to personal motboard
        let state = this.props.loginStateProp;
        if(state.isLogged){
            let payload={
                "board": tile,
                "user": state.userData
            };
            this.props.addPublicBoardToPrivate(payload, function(err, result){
                let state = this.props.loginStateProp;
                if(state.updateUserBoardError){
                    this.openModalError();
                } else{
                    this.openModalBillingSuccess();
                }
            });
        } else{
            this.openModalSignUpError();
        }

    }

    showUserPrivateBoards(){
        this.props.history.push('/home')
    }
    handleLikes = (name, likes) =>{
        var payload={
            "name": name,
            "likes":likes
        }
        this.props.postLikesAction(payload, function(err, result){
            console.log("action has been successfully returned");
            let publicBoards = this.props.publicMotBoard;
            this.setState({
                ...this.state,
                ListOfMotBoards: publicBoards.boards
            })
        });
        console.log("inside handlelikes");
    }
    render(){
        return (
            <div>
                <Modal backdrop="true" dialogClassName={customStyles} show={this.state.showModalError} onHide={() => this.closeModalSignUpError()}>
                    <Modal.Header closeButton>
                        {/*<Modal.Title>Bookmarked Success</Modal.Title>*/}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row justify-content-md-center">
                            <div className="form-group row">
                                <div className="col-sm-offset-1 col-sm-10 col-sm-offset-1">
                                    <div className="alert alert-success text-center" role="alert">You first need to sign
                                        in before adding a public board to your private boards.</div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.showSignInPage()}>Sign In</Button>
                        <Button onClick={() => this.closeModalSignUpError()}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal dialogClassName={customStyles} show={this.state.showModalSuccess} onHide={() => this.closeModalBillingSuccess()}>
                    <Modal.Header closeButton>
                        {/*<Modal.Title>Payment Success</Modal.Title>*/}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row justify-content-md-center">
                            <div className="form-group row">
                                <div className="col-sm-offset-1 col-sm-10 col-sm-offset-1">
                                    <div className="alert alert-success text-center" role="alert"> Added Successfully. To see all your private boards click 'My Boards' else close </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.showUserPrivateBoards()}>My Boards</Button>
                        <Button onClick={() => this.closeModalBillingSuccess()}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal backdrop="true" dialogClassName={customStyles} show={this.state.showError} onHide={() => this.closeModalError()}>
                    <Modal.Header closeButton>
                        {/*<Modal.Title>Bookmarked Success</Modal.Title>*/}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row justify-content-md-center">
                            <div className="form-group row">
                                <div className="col-sm-offset-1 col-sm-10 col-sm-offset-1">
                                    <div className="alert alert-success text-center" role="alert">BookMarking failed. Please try again</div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.closeModalError()}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <div className="row justify-content-center">
                    <div class="col-md-11 mt-5 pt-5">
                        <div style={styles.root}>
                            <GridList
                                cellHeight={300}
                                style={styles.gridList}
                                padding={25}
                                cols={4}
                            >
                                {this.state.ListOfMotBoards.map((tile, index) => (
                                    <GridTile
                                        key={index}
                                        title={
                                            <div>
                                                {tile.name}
                                            </div>
                                        }
                                        actionIcon={<div>
                                            <Checkbox
                                                labelStyle={{color: 'transparent'}}
                                                iconStyle={styles.icon}
                                                labelPosition={'left'}
                                                checkedIcon={<BookmarkFilled />}
                                                uncheckedIcon={<Bookmark/>}
                                                style={styles.checkbox}
                                                label={'Add'}
                                                onClick={(event) => {
                                                    this.addBoardToPersonal(tile);
                                                }}
                                            />
                                            <Checkbox
                                                labelStyle={{color: 'white'}}
                                                labelPosition={'left'}
                                                iconStyle={styles.icon}
                                                checkedIcon={<FavFilled/>}
                                                uncheckedIcon={<Fav/>}
                                                label={tile.likes}
                                                style={styles.checkbox}
                                                onClick={(event) => {
                                                    tile.likes = tile.likes +1;
                                                    this.handleLikes(tile.name, tile.likes);
                                                }}
                                            />
                                        </div>}
                                        actionPosition={'right'}
                                        // subtitle={<span>by <b>{tile.author}</b></span>}
                                        titleBackground={'rgba(255, 255, 255, 1)'}
                                        class={'motboard-single-image-card'}
                                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
                                    >
                                        <img src={tile.images[0][0].url}
                                             onClick={() => {
                                                 this.pushimage(tile.name);
                                             }}
                                        />
                                    </GridTile>
                                ))}
                            </GridList>
                            {/*<div className="container row justify-content-center">*/}
                            {/*<nav aria-label="...">*/}
                            {/*<ul className="pagination">*/}
                            {/*<li className="page-item disabled">*/}
                            {/*<span className="page-link">Previous</span>*/}
                            {/*</li>*/}
                            {/*{*/}
                            {/*this.state.pagination.map((page,index) => (*/}
                            {/*<div>*/}
                            {/*<li className={page.ActiveStatus}><a className="page-link" href="#">{index+1}</a></li>*/}
                            {/*</div>*/}
                            {/*))*/}
                            {/*}*/}
                            {/*<li className="page-item">*/}
                            {/*<a className="page-link" href="#">Next</a>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            {/*</nav>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("state App", state)
    return{
        publicMotBoard : state.publicMotBoardData,
        loginStateProp: state.loginStateData
    };
}
export default withRouter(connect(mapStateToProps,{postLikesAction, getPublicMotBoardAction, addPublicBoardToPrivate})(Board));
