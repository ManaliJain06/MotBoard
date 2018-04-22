import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';

class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>
          <div className="row justify-content-center">
            <div className="col-md-6 cardbox">
              <input className="inputfield" placeholder="First Name"/><br/>
              <input className="inputfield" placeholder="Last Name"/><br/>
                <input type = "email" className="inputfield" placeholder="Email"/><br/>
                <input type = "password" className="inputfield" placeholder="Password"/><br/>
              <div className="row justify-content-center">
                <button className="ybutton"onClick={() => {
                    this.props.history.push("/signUp");
                }}>SIGN UP</button>
              </div>
              <div className="row justify-content-center">
                <button className="ybuttonSecondary" onClick={() => {
                    this.props.history.push("/signIn");
                }}>or SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default withRouter(Homepage);
