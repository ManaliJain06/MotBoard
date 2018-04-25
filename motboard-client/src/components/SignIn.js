import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';
import {signinAction} from '../actions';



class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                "username": "",
                "password": ""
            }
        }
    }


    handleSignInSubmit() {
        this.props.signinAction(this.state.userdata);
    }
    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-6 cardbox">
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
                        <div className="row justify-content-center">
                            <button className="ybutton" onClick={() => {
                                this.props.history.push("/signIn");
                                this.handleSignInSubmit();
                            }}>SIGN IN
                            </button>
                        </div>
                        <div className="row justify-content-center">
                            <button className="ybuttonSecondary" onClick={() => {
                                this.props.history.push("/signUp");
                            }}>or SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null,{signinAction})(SignIn));
