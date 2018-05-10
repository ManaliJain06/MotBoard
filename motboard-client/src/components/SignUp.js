import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';
import {signupAction} from '../actions';
import signup from '../Images/signup4.jpg';
import Radium, {StyleRoot} from 'radium';
import signupimage from '../Images/chilling.gif';
import {pulse} from 'react-animations';
import * as validation from '../validation/LoginValidation';
import swal from 'sweetalert';
import DatePicker from 'material-ui/DatePicker';

const styles = {
    pulse: {
        animation: 'x 0.5s ease-in-out',
        animationName: Radium.keyframes(pulse, 'pulse'),
    },
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                "username": "",
                "password": "",
                "firstname": "",
                "lastname": "",
                "profileImage" : "http://localhost:3300/images/user.png",
            },
            messageSignUp: ''
        }
        this.signUpResponse = this.signUpResponse.bind(this);
        this.signUpActionCall = this.signUpActionCall.bind(this);
    }

    handleSignUpSubmit() {
        let valid = validation.signup(this.state.userdata);
        if(valid === ''){
            this.signUpActionCall(this.signUpResponse);
        }else{
            this.setState({
                ...this.state,
                messageSignUp: valid
            });
        }
    }

    signUpResponse(){
        let state = this.props.loginStateProp;
        if( state.isLogged === true){
            swal("Congratulations","We are excited to have you aboard.","success");
            this.props.history.push("/home");
        } else if(state.isLogged === false && state.msg !== ''){
            this.setState({
                ...this.state,
                messageSignUp: state.msg
            });
        }
    }

    signUpActionCall(callback){
        this.props.signupAction(this.state.userdata);
        setTimeout(callback,1000);
    }

    render() {
        let messageSignUp =null;
        if(this.state.messageSignUp !== ''){
            messageSignUp = <div className="clearfix">
                <div className="alert alert-danger text-center" role="alert">
                    {this.state.messageSignUp}
                </div>
            </div>;
        } else{
            messageSignUp = <div></div>;
        }

        return (
            <div>
                <StyleRoot>
                    <div className="pulse" style={styles.pulse}>
                        <div className="row justify-content-center">
                            <div className="col-md-6 indexZ" >
                                <img src={signupimage} alt="hello" style={{'opacity':'1','height':'40vw','object-fit':'contain','transform':'rotateY(180deg)'}} className={"indexZ"}/>
                            </div>
                            <div className="col-md-4 cardbox">
                                {messageSignUp}
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
                                /><br/>
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
                                /><br/>
                                <input type="email" className="inputfield" placeholder="Email"
                                       value={this.state.userdata.username}
                                       onChange={(event) => {
                                           this.setState({
                                               userdata: {
                                                   ...this.state.userdata,
                                                   username: event.target.value
                                               }
                                           });
                                       }}
                                /><br/>
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
                                /><br/>
                                <div>
                                    <DatePicker className="inputfield"
                                                hintText="Date of Birth"
                                                mode="landscape"
                                                style={{'text-decoration':'none'}}
                                    />
                                </div><br/>
                                <div className="row justify-content-center">
                                    <button className="ybutton" onClick={() => {
                                        this.handleSignUpSubmit();
                                    }}>SIGN UP
                                    </button>
                                </div>
                                <div className="row justify-content-center">
                                    <button className="ybuttonSecondary" onClick={() => {
                                        this.props.history.push("/signIn");
                                    }}>or SIGN IN
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </StyleRoot>
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
export default withRouter(connect(mapStateToProps,{signupAction})(SignUp));
