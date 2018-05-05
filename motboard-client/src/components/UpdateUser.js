import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import UserHomePage from './UserHomePage';
import '../css/landingPage.css';
import {updateUserData, updateUserProfilePicAction} from '../actions';
import * as validation from '../validation/updateValidation';

class UpdateUser extends Component{
    constructor(props){
        super(props);
        let userData = this.props.loginStateProp.userData;
        this.state = {
            userdata: {
                firstname: (userData)? userData.firstname : '',
                lastname: (userData)? userData.lastname : '',
                username: (userData)? userData.username : '',
                password: (userData)? userData.password : '',
                profileImage : (userData)? userData.profileImage : '',
            },
            messageDivUpdate: ''
        }
        this.updateUserProfilePicResponse = this.updateUserProfilePicResponse.bind(this);
        this.updateUserProfilePicCall = this.updateUserProfilePicCall.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);

        this.updateUserResponse = this.updateUserResponse.bind(this);
        this.updateUserDataCall = this.updateUserDataCall.bind(this);
        this.updateUserResponse = this.updateUserResponse.bind(this);
    }

    handleFileUpload(event) {
        const payload = new FormData();
        payload.append('file', event.target.files[0]);
        // payload.append('user', this.state.userdata);

        this.updateUserProfilePicCall(payload, this.updateUserProfilePicResponse);
    }
    updateUserProfilePicResponse(){
        let state = this.props.loginStateProp;
        if( state.profileURLError === true){
            this.setState({
                ...this.state,
                messageDivUpdate: "Error Occured in uploading"
            });
        } else if(state.profileImage !== ''){
            this.setState({
                // ...this.state,
                userdata:{
                    ...this.state.userdata,
                    profileImage : this.props.loginStateProp.profileImage
                }
            });
        }
    }

    updateUserProfilePicCall(payload, callback){
        this.props.updateUserProfilePicAction(payload);
        // this.props.updateUserDataAction(this.state.userdata);
        setTimeout(callback,1000);
    }

    handleUpdateUser(){
        var valid = validation.update(this.state.userdata);
        if(valid === ''){
            this.updateUserDataCall(this.state.userdata, this.updateUserResponse);
        }else{
            this.setState({
                ...this.state,
                messageDivUpdate: valid
            });
        }
    }

    updateUserDataCall(payload, callBack){
        this.props.updateUserData(payload);
        setTimeout(callBack,1000);
    }

    updateUserResponse(){
        let state = this.props.loginStateProp;
        if( state.updateError === true){
            this.setState({
                ...this.state,
                messageDivUpdate: "Error Occured in updating"
            });
        } else if(state.userData !== ''){
            this.setState({
                // ...this.state,
                userdata:{
                    firstname: state.userData.firstname,
                    lastname: state.userData.lastname,
                    username: state.userData.username,
                    password: state.userData.password,
                    profileImage : state.userData.profileImage
                },
                messageDivUpdate: ''
            });
        }
    }
    render(){

        let userState = this.props.loginStateProp;
        if(userState.isLogged === false){
            this.props.history.push("/signIn");
        }

        let messageDivUpdate =null;
        if(this.state.messageDivUpdate !== ''){
            messageDivUpdate = <div className="clearfix">
                <div className="alert alert-danger text-center" role="alert">
                    {this.state.messageDivUpdate}
                </div>
            </div>;
        } else{
            messageDivUpdate = <div></div>;
        }
        const image = this.state.userdata.profileImage;
        return (
            <div className="row justify-content-center">
                <div className="col-md-11 mt-5 pt-5">
                    <div className="col-md-6 indexZ" >
                        <img src={image} alt="hello" style={{'height':'24vw','object-fit':'contain','border-radius': '15%','margin-left': '70px'}} className={"indexZ"}/>
                    </div>
                    <div className="col-md-5 cardbox">
                        {messageDivUpdate}
                        <h4 className='text-uppercase Questrial'
                            style={{'margin-bottom':'10px','text-align':'center'}}>Your Account Information</h4>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label labelColor">First Name</label>
                            <div className="col-sm-9">
                                <input className="inputfield" placeholder="First Name"
                                       value={this.state.userdata.firstname}
                                       onChange={(event) => {
                                           this.setState({
                                               userdata: {
                                                   ...this.state.userdata,
                                                   firstname: event.target.value
                                               }
                                           });
                                       }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label labelColor">Last Name</label>
                            <div className="col-sm-9">
                                <input className="inputfield" placeholder="Last Name"
                                       value={this.state.userdata.lastname}
                                       onChange={(event) => {
                                           this.setState({
                                               userdata: {
                                                   ...this.state.userdata,
                                                   lastname: event.target.value
                                               }
                                           });
                                       }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label labelColor">User Name</label>
                            <div className="col-sm-9">
                                <input type="email" className="inputfield" placeholder="Email"
                                       value={this.state.userdata.username} readOnly
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label labelColor">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="inputfield" placeholder="Password"
                                       value={this.state.userdata.password}
                                       onChange={(event) => {
                                           this.setState({
                                               userdata: {
                                                   ...this.state.userdata,
                                                   password: event.target.value
                                               }
                                           });
                                       }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label labelColor">Profile Picture</label>
                            <div className="col-sm-9">
                                <div className="upload-button">
                                    <div>Upload Files</div>
                                    <input className="upload" type="file" name="file"
                                           onChange={
                                               this.handleFileUpload
                                           }/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button className="ybutton" onClick={() => {
                                this.handleUpdateUser();
                            }}>Update
                            </button>
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
        loginStateProp : state.loginStateData,
    };
}
export default withRouter(connect(mapStateToProps,{updateUserData, updateUserProfilePicAction})(UpdateUser));
