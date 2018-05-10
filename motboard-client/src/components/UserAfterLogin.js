import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import {jQuery} from 'jquery';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import '../css/userafterlogin.css';
import {getuserallboards, savePrivateMotboardName} from '../actions';


var boards;
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
    icon: {
        fill: 'white',
        width: 30,
        height: 30,
    }
};
const customContentStyle = {
    width: '30%',
    maxWidth: 'none',
};
class UserAfterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privateMotboards: [],
            publicMotboards: [],
            temp: '',
            openDialog: false,
            motboardName: ''
        };

    }

    handleOpen = () => {
        this.setState({
            openDialog: true
        });
    };
    handleSubmit = () => {
        this.setState({
            openDialog: false
        });
        console.log('blog-text-to-submit: '+this.refs.blogContent.getValue());
        // var blogJSONtoSend ={
        //     'text': this.refs.blogContent.getValue()
        // };


        let state = this.props.loginStateProp;
        if(state.isLogged){
            let payload={
                "motboardboardname": this.refs.blogContent.getValue(),
                "user": state.userData
            }
            this.privateMaction(payload, this.privateMresponse(this.refs.blogContent.getValue()));
        }




        // this.props.postblog(blogJSONtoSend);
        // setTimeout(this.props.getBlogs,200);
    };

    privateMaction=(payload, callback) =>{
        this.props.savePrivateMotboardName(payload);
        setTimeout(callback, 1000);
    };

    privateMresponse = (name) => {
        this.props.history.push({
            pathname: '/userboards',
            state: {motBoardName:name}
        })
    }
    handleCloseDialog=()=>{
        this.setState({
            openDialog: false
        });
    }
    componentDidMount() {
        //TODO:Get Motboards of the user - private and public
        this.props.getuserallboards();
    }

    pushimage = (temp) => {
       alert("inside push image");
        this.props.history.push({
            pathname: '/userboards',
            state: {motBoardName: temp}
        })
    };

    // setMotBoards = (boards) => {
    //     console.log("inside");
    //     var privateMotboards = boards.motboards.filter((board) => board.access == 'private');
    //     var publicMotboards = boards.motboards.filter((board) => board.access == 'public');
    //     console.log('privateMotboards' + privateMotboards[0].name);
    //     console.log('publicMotboards' + publicMotboards);
    //     this.setState({
    //         privateMotboards: privateMotboards,
    //         publicMotboards: publicMotboards
    //     })
    // };

    render() {
        console.log(this.props.boards);
        //  if(this.props.boards.motboards)
        //    {this.setMotBoards(this.props.boards)}
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleCloseDialog}
            />,
            <FlatButton
                label="Next"
                primary={true}
                onClick={this.handleSubmit}
            />,
        ];
        if (this.props.boards.data) {
            return (
                <div>
                    <div style={{"padding": "25px"}} className={"mt-5"}>
                        <div className="row">
                            <div className="col-md-5 ml-5 mr-5 EachBoardBox">
                                <h1 className="Questrial" style={{'text-align': 'center'}}>Private MotBoards</h1>
                                <div className="row">
                                    <hr/>
                                </div>
                                <GridList
                                    cellHeight={300}
                                    style={styles.gridList}
                                    padding={25}
                                    cols={2}
                                >
                                    {this.props.boards.data[1].map((tile) => (
                                        <GridTile
                                            key={tile.images[0][0].url}
                                            title={
                                                <div>
                                                    {tile.name}
                                                </div>
                                            }
                                            titleBackground={'rgba(255, 255, 255, 1)'}
                                            class={'motboard-single-image-card'}
                                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
                                        >
                                            <img src={tile.images[0][0].url}
                                                 onClick={this.pushimage.bind(this, tile.name)}
                                            />
                                        </GridTile>
                                    ))}
                                </GridList>
                            </div>
                            <div className="col-md-1">
                                <FloatingActionButton>
                                    <ContentAdd
                                        onClick={this.handleOpen}/>
                                </FloatingActionButton>
                            </div>
                            <div className="col-md-5 mr-5 EachBoardBox">
                                <h1 className="Questrial" style={{'text-align': 'center'}}>Public MotBoards</h1>
                                <div className="row">
                                    <hr/>
                                </div>
                                <GridList
                                    cellHeight={300}
                                    style={styles.gridList}
                                    padding={25}
                                    cols={2}
                                >
                                    {this.props.boards.data[0].map((tile) => (
                                        <GridTile
                                            key={tile.images[0][0].url}
                                            title={
                                                <div>
                                                    {tile.name}
                                                </div>
                                            }
                                            titleBackground={'rgba(255, 255, 255, 1)'}
                                            class={'motboard-single-image-card'}
                                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
                                        >
                                            <img src={tile.images[0][0].url}

                                                 onClick={this.pushimage.bind(this, tile.name)}
                                            />
                                        </GridTile>
                                    ))}
                                </GridList>
                            </div>
                            <Dialog
                                title="What name would you like to give to your MoodBoard?"
                                actions={actions}
                                modal={true}
                                contentStyle={customContentStyle}
                                open={this.state.openDialog}
                            >
                                <TextField
                                    style={{'border-top':'0.1px #424242 solid','border-radius':'5px'}}
                                    multiLine={true}
                                    rows={1}
                                    rowsMax={5}
                                    fullWidth={true}
                                    maxLength="220"
                                    ref="blogContent"
                                /><br />
                            </Dialog>
                        </div>
                    </div>
                </div>)
        }

        else
            return (<div></div>)

    }
}


function mapStateToProps(state) {
    return {
        boards: state.getuserboards,
        loginStateProp : state.loginStateData
    }
}


export default connect(mapStateToProps, {getuserallboards,savePrivateMotboardName})(withRouter(UserAfterLogin));
