import React, {Component} from 'react';
import {sendFiles,getImages} from '../actions/index';
import {connect} from 'react-redux';
import {Arrange} from './MotBoardImages_Arrange';
import {Route, withRouter} from 'react-router-dom';
import MotBoardImages_Arrange from "./MotBoardImages_Arrange";
import '../css/homepage.css';


class MyUploader extends Component {
    handleFileUpload=(event)=>{
        let payload = new FormData();
        for(let i=0;i<event.target.files.length;i++){
            payload.append('mypic', event.target.files[i]);
        }
        console.log(payload);
        this.props.sendFiles(payload);
        var motBoardName="first";
        this.props.getImages(motBoardName);
    };

    componentDidMount(){
        var motBoardName="first";
        this.props.getImages(motBoardName);
    }

    render() {
        console.log(this.props.images);
        return (
            <div>
                <div className="container  uploadbox">
                    <input type="file" className="uploadFile" multiple onChange={this.handleFileUpload}/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {images: state.imageData}
}

export default  (connect(mapStateToProps,{getImages,sendFiles})(MyUploader));