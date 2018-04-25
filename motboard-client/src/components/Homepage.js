import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './About';
import Board from './Board';
import Team from './Team';
import BalloonPage from './BalloonPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Chat from './Chat';
import '../css/landingPage.css';
import '../css/chat.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import MotBoardImages_Arrange from "./MotBoardImages_Arrange";
import Motboards_List from "./Motboards_List";

class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <header >
                    <nav style={{'background-color':'#ffffff'}} className="navbar navbar-expand-lg navbar-dark fixed-top mb-5" id="mainNav">
                        <a className="navbar-brand d-flex align-items-center " onClick={() => {
                            this.props.history.push("/");
                        }}>
                            <span className="megrim blackColor pt-3 pl-5 pointer motboardlogo">MOtBOARD</span>
                        </a>
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" style={{'font-size':'1.4em'}} onClick={() => {
                                    this.props.history.push("/Boards");
                                }}>boards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{'font-size':'1.4em'}} onClick={() => {
                                    this.props.history.push("/About");
                                }}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger pointer" style={{'font-size':'1.4em'}} onClick={() => {
                                    this.props.history.push("/Team");
                                }}>Team</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="pt-5 mt-5">
                    {/*{*/}
                    {/*this.props.signup ? <SignIn/> : <SignUp/>*/}
                    {/*}*/}
                    <Route exact path="/" render={() => (
                        <div>
                            <BalloonPage/>
                        </div>
                    )}/>
                    <Route exact path="/images" render={() => (
                        <div>
                            <Board/>
                        </div>
                    )}/>
                    <Route exact path="/Arrange" render={() => (
                        <div>
                            <MotBoardImages_Arrange/>
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
                    <Route exact path="/Boards" render={() => (
                        <div>
                            <Motboards_List/>
                        </div>
                    )}/>
                </div>
                <div className={'chat-sticky'}>
                    <Chat/>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);
