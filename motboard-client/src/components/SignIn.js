import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';

class SignIn extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>
          <div className="row justify-content-center">
            <div className="col-md-6 cardbox">
              <input type="email" className="inputfield" placeholder="Email"/><br/>
              <input type= "password" className="inputfield" placeholder="Password"/><br/>
              <div className="row justify-content-center">
                <button className="ybutton"onClick={() => {
                    this.props.history.push("/signIn");
                }}>SIGN IN</button>
              </div>
              <div className="row justify-content-center">
                <button className="ybuttonSecondary" onClick={() => {
                    this.props.history.push("/signUp");
                }}>or SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default withRouter(SignIn);
