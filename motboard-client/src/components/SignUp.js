import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';
import {signupAction} from '../actions';
import signup from '../Images/test.jpg';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                "username": "",
                "password": "",
                "firstname": "",
                "lastname": ""
            }
        }
    }

    handleSignUpSubmit() {
        // alert("sanjayinside");
        this.props.signupAction(this.state.userdata);
    }


    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-6 indexZ" >
                        <img src={signup} alt="hello" style={{'height':'40vw','object-fit':'contain','margin-left':'50px'}} className={"indexZ"}/>
                    </div>
                    <div className="col-md-4 cardbox">
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
                        <div className="row justify-content-center">
                            <button className="ybutton" onClick={() => {
                                this.props.history.push("/signUp");
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
        )
    }
}

export default withRouter (connect(null,{signupAction})(Homepage));
