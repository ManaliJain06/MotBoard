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
                <a className="navbar-brand js-scroll-trigger" onClick={() => {
                    // this.setActive('hotels');
                    this.props.history.push("/");
                }}>
                  <span className="megrim large blackColor pointer">MOtBOARD</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger pointer" onClick={() => {
                          // this.setActive('hotels');
                          this.props.history.push("/Boards");
                      }}>boards</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger pointer" onClick={() => {
                          // this.setActive('hotels');
                          this.props.history.push("/About");
                      }}>About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger pointer" onClick={() => {
                          // this.setActive('hotels');
                          this.props.history.push("/Team");
                      }}>Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          {/*{*/}
            {/*this.props.signup ? <SignIn/> : <SignUp/>*/}
          {/*}*/}
          <Route exact path="/" render={() => (
              <div>
                  <BalloonPage/>
              </div>
          )}/>
          <Route exact path="/Boards" render={() => (
              <div>
                  <Board/>
              </div>
          )}/>
          <Route exact path="/About" render={() => (
              <div>
                  <About/>
              </div>
          )}/>
          <Route exact path="/Team" render={() => (
              <div>
                  <Team/>
              </div>
          )}/>
          <Route exact path="/signUp" render={() => (
              <div>
                  <SignUp/>
              </div>
          )}/>
          <Route exact path="/signIn" render={() => (
              <div>
                  <SignIn/>
              </div>
          )}/>
        </div>
        )
    }
}

export default withRouter(Homepage);
