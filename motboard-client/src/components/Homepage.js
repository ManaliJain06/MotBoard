import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './About';
import Board from './Board';
import Team from './Team';
import BalloonPage from './BalloonPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import '../css/landingPage.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                  <span className="megrim large blackColor">MOtBOARD</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger">boards</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger">team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          {
            this.props.signup ? <SignIn/> : <SignUp/>
          }
        <BalloonPage/>
        </div>
        )
    }
}

export default withRouter(Homepage);
