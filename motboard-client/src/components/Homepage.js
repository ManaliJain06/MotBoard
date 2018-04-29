import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './About';
import Board from './Board';
import Team from './Team';
import Upload from './uploadImages';
import BalloonPage from './BalloonPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import '../css/landingPage.css';
import '../css/animate.css';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';
import MotBoardImages_Arrange from "./MotBoardImages_Arrange";
import Motboards_List from "./Motboards_List";
import Radium, {StyleRoot} from 'radium';
import {slideInRight, slideInLeft} from 'react-animations';
import VoiceTest from "./VoiceTest";
import UserHomePage from './UserHomePage';
import ColorsGenerator from './ColorsGenerator';

const styles = {
    slideInRight: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight'),
    },
    slideInLeft: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft'),
    }
}

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav style={{'background-color': '#ffffff'}}
                         className="navbar navbar-expand-lg navbar-dark fixed-top mb-5" id="mainNav">
                        <a className="navbar-brand d-flex align-items-center " onClick={() => {
                            this.props.history.push("/");
                        }}>
                            <span className="megrim blackColor pt-3 pl-5 pointer motboardlogo">MOtBOARD</span>
                        </a>
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" style={{'font-size': '1.4em'}} onClick={() => {
                                    this.props.history.push("/Boards");
                                }}>boards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{'font-size': '1.4em'}} onClick={() => {
                                    this.props.history.push("/ColorsGenerator");
                                }}>colors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{'font-size': '1.4em'}} onClick={() => {
                                    this.props.history.push("/About");
                                }}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger pointer" style={{'font-size': '1.4em'}}
                                   onClick={() => {
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

                        <StyleRoot>
                            <div className="pt-5 slideInLeft mt-5" style={styles.slideInLeft}>
                                <BalloonPage/>
                            </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/images" render={() => (
                        <StyleRoot>
                            <div className="pt-5 slideInRight mt-5" style={styles.slideInRight}>
                                <Board/>
                            </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/Arrange" render={() => (
                        <div>
                            <MotBoardImages_Arrange/>
                        </div>
                    )}/>
                    <Route exact path="/ColorsGenerator" render={() => (
                        <div>
                            <ColorsGenerator/>
                        </div>
                    )}/>
                    <Route exact path="/About" render={() => (
                        <StyleRoot>
                            <div className="pt-5 slideInRight mt-5" style={styles.slideInRight}>
                                <About/>
                            </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/Team" render={() => (
                        <StyleRoot>
                            <div className="pt-5 slideInRight mt-5" style={styles.slideInRight}>
                                <Team/>
                            </div>
                        </StyleRoot>
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
                    <Route exact path="/upload" render={() => (
                        <div>
                            <Upload/>
                        </div>
                    )}/>
                    <Route exact path="/upload" render={() => (
                        <div>
                            <VoiceTest/>
                        </div>
                    )}/>
                    <Route exact path="/Boards" render={() => (
                        <StyleRoot>
                            <div className="pt-5 slideInRight mt-5" style={styles.slideInRight}>
                                <Motboards_List/>
                            </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/home" render={()=>(
                        <div>
                            <UserHomePage/>
                        </div>
                    )}/>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);
