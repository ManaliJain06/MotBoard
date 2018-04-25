import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';
import {signinAction} from '../actions';
import signin from '../Images/signin.jpg';
import Radium, {StyleRoot} from 'radium';
import {pulse} from 'react-animations';
const styles = {
    pulse: {
        animation: 'x 0.5s ease-in-out',
        animationName: Radium.keyframes(pulse, 'pulse'),
    },
}

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
                <StyleRoot>
                    <div className="pulse" style={styles.pulse}>
                        <div className="row justify-content-center">
                            <div className="col-md-6 indexZ" >
                                <img src={signin} alt="hello" style={{'height':'40vw','object-fit':'contain','margin-right':'20px'}} className={"indexZ"}/>
                            </div>
                            <div className="col-md-4 cardbox">
                                <h4 className='Questrial' style={{'margin-bottom':'10px','text-align':'center'}}>SIGN IN</h4>
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
                </StyleRoot>
            </div>
        )
    }
}

export default withRouter(connect(null,{signinAction})(SignIn));
