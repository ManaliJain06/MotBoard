import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {getImages,sendFiles} from '../actions/index';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import '../css/signup.css';
import '../css/homepage.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArrangeIcon from 'material-ui/svg-icons/action/dashboard';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import ShareIcon from 'material-ui/svg-icons/social/share';
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
    button: {
        margin: 12,
    }
};


const iconStyles = {
    marginRight: 24,
};
const customContentStyle = {
    width: '50%',
    maxWidth: '20',
};

const ChartStyle ={
    height: 50,
    width:50,
    color:'#424242',

};

const image = {
    'url': 'null',
};
const link = 'http://localhost:3300/images/';

class User_Boards extends Component {

    constructor(props) {
        super(props);
    }


    state = {
        open: false,
        ListOfImages: []
    };
    handleClose = () => {
        this.setState({open: false});
    };
    getFullImage = (imageURL) => {
        console.log(imageURL);
        image.url = imageURL;
        this.setState({open: true});
    };

    componentWillMount() {
        this.props.getImages(this.props.location.state.motBoardName);
    }
    componentDidMount(){
        //TODO: Call to backend here - to retrieve the blogs
        this.props.getImages(this.props.location.state.motBoardName);
    }

    handleFileUpload = (event) => {
        let payload = new FormData();
        for (let i = 0; i < event.target.files.length; i++) {
            payload.append('mypic', event.target.files[i]);
        }
//         payload.motBoardName=this.props.location.state.motBoardName;
        this.abc(payload, this.def);
        //setTimeout( this.props.getImages(this.props.location.state.motBoardName),2000);
    };

    abc = (payload,callback) =>{
        this.props.sendFiles(payload);
        setTimeout(callback,200);
    };

    def = (payload) =>{
        this.props.getImages(this.props.location.state.motBoardName);
     //   setTimeout(callback,2000);
    };

    // setBoards(){
    //     let publicBoards = this.props.images;
    //     this.setState({
    //         ListOfImages:publicBoards
    //     })
    // }
    // componentDidMount(){
    //     setTimeout(this.setBoards, 1000);
    // }



    render() {
        console.log(this.props.images);
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <div className="row justify-content-center">
                    <div>
                        <div className={"row"}>
                            <div className="col-md-3">
                                <p>Colorful</p>
                            </div>
                        <div className="container col-md-6 uploadbox">
                            <UploadIcon style={ChartStyle}/>
                            <input type="file" className="uploadFile" multiple onChange={this.handleFileUpload}/>
                        </div>
                            <div className="col-md-3">
                                <RaisedButton
                                    label="Arrange"
                                    labelPosition="before"
                                    backgroundColor={'#BA68C8'}
                                    icon={<ArrangeIcon />}
                                    style={styles.button}
                                />
                                <RaisedButton
                                    label="Public"
                                    labelPosition="before"
                                    backgroundColor={'#BA68C8'}
                                    icon={<ShareIcon />}
                                    style={styles.button}
                                />

                            </div>
                        </div>
                    </div>
                    <div class="col-md-11 mt-5 pt-5">
                        <div style={styles.root}>
                            <GridList
                                cellHeight={300}
                                style={styles.gridList}
                                padding={25}
                                cols={4}
                            >
                                {this.props.images.map((tile) => (
                                    <GridTile
                                        onClick={(event) => {
                                            this.getFullImage(tile.url)
                                        }}
                                        key={tile.img}
                                        title={
                                            <div>
                                                <input type={"text"}
                                                       placeholder={"Add Comment"}
                                                       className={'motboard-single-image-comment'}
                                                />
                                            </div>}
                                        // subtitle={<span>by <b>{tile.author}</b></span>}
                                        titleBackground={'rgba(255, 255, 255, 1)'}
                                        class={'motboard-single-image-card'}
                                    >
                                        <img src={tile.url}/>
                                    </GridTile>
                                ))}
                            </GridList>


                            <Dialog
                                actions={actions}
                                modal={true}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                contentStyle={customContentStyle}
                                autoScrollBodyContent={false}
                            >
                                <img src={image.url} height={document.body.clientHeight / 3} width={'auto'}/>
                                {console.log(document.body.clientHeight)}
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {images: state.imageData}
}


export default withRouter(connect(mapStateToProps, {sendFiles,getImages})(User_Boards));