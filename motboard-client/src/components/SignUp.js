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
              <input className="inputfield" placeholder="username"/><br/>
              <input className="inputfield" placeholder="username"/><br/>
              <div className="row justify-content-center">
                <button className="ybutton">SIGN UP</button>
              </div>
              <div className="row justify-content-center">
                <button className="ybuttonSecondary" >or SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default withRouter(Homepage);
