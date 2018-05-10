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


// const tilesData = [
//     {
//         url: 'https://images.unsplash.com/photo-1519407710298-222d42b8cdc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6785fcbdf1abe767250b836e81178808&auto=format&fit=crop&w=1053&q=80',
//         description: 'Colorful',
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c607dd61a9581a65b8eba47eb1d31a58&auto=format&fit=crop&w=675&q=80',
//         description: '',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c395251a00dc113cdcb63d59e0505e62&auto=format&fit=crop&w=1050&q=80',
//         description:'I like this',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1508257599793-5a200cf82b07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4b040befc23b61e1b38d524a1aff564&auto=format&fit=crop&w=1050&q=80',
//         description:'Texture is good',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1510007552638-e1c0c4c67ee0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95ed13af4e929ecf4617003a8e056214&auto=format&fit=crop&w=1050&q=80',
//         description:'',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1512810730836-1a7cde39c455?ixlib=rb-0.3.5&s=71bf7a9ce922def0c36a3facd04195c6&auto=format&fit=crop&w=1950&q=80',
//         description:'',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixlib=rb-0.3.5&s=b7f4bc9efbf3d1ae81537360cca704f3&auto=format&fit=crop&w=675&q=80',
//         description:'',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee60964c06a30ae7596dce9f7380a391&auto=format&fit=crop&w=750&q=80',
//         description:'',
//     },
//     {
//         url:'https://images.unsplash.com/photo-1510046651888-1be61805a114?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=231f12926b338b70673ea107b2c78ca3&auto=format&fit=crop&w=700&q=80',
//         description:'',
//     },
// ];

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
        ListOfImages: [],
        motBoardName:''
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
        setTimeout(callback,2000);
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

arrangeImages=()=>{
    //alert(this.props.location.state.motBoardName);
    //alert(this.state.motBoardName);
    // this.setState({
    //     motboardName:this.props.location.state.motBoardName
    // });
    alert("inside");
    this.props.history.push({
        pathname: '/Arrange',
        state: {motBoardName: this.props.location.state.motBoardName}
    })
};

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
                        <div className="container col-md-6 uploadbox">
                            <input type="file" className="uploadFile" multiple onChange={this.handleFileUpload}/>
                        </div>
                            <div className="col-md-6">
                                <RaisedButton
                                    label="Arrange"
                                    labelPosition="before"
                                    secondary={true}
                                    icon={<ArrangeIcon />}
                                    style={styles.button}
                                    onClick={this.arrangeImages}
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


export default (connect(mapStateToProps, {sendFiles,getImages})(withRouter(User_Boards)));