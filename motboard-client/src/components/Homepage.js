import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './About';
import Board from './Board';
import Team from './Team';
import Upload from './uploadImages';
import BalloonPage from './BalloonPage';
import SignUp from './SignUp';
import User_Boards from './User_Boards';
import SignIn from './SignIn';
import Single_Motboard from './Single_Motboard';
import Blogs from './Blogs';
import '../css/landingPage.css';
import '../css/animate.css';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';
import MotBoardImages_Arrange from "./MotBoardImages_Arrange";
import Motboards_List from "./Motboards_List";
import Radium, {StyleRoot} from 'radium';
import {slideInRight, slideInLeft, fadeInUp} from 'react-animations';
import UserHomePage from './UserHomePage';
import UpdateUser from './UpdateUser';
import ColorsGenerator from './ColorsGenerator';
import UserAfterLogin from './UserAfterLogin';
import ProfilePic from './ProfilePic';
import Chat from './Chat';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { translate, Trans } from 'react-i18next';
import PropTypes from 'prop-types';

const styles = {
    slideInRight: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight'),
    },
    slideInLeft: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft'),
    },
    fadeInUp: {
        animation: 'x 0.8s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    }
}

class Homepage extends Component {
    constructor(props) {
        super(props);
        let userState = this.props.loginStateProp;
        this.state={
            "userstate":userState.isLogged,
            open: false,
        };
    }
    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        let userState = this.props.loginStateProp;
        const { t, i18n } = this.props;

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        return (
            <div>
                <div>
                    <nav style={{'background-color': '#ffffff'}}
                         className="navbar navbar-expand-lg navbar-dark fixed-top mb-5" id="mainNav">
                        <a className="navbar-brand d-flex align-items-center " onClick={() => {
                            this.props.history.push("/");
                        }}>
                            <span className="megrim blackColor pt-3 pl-5 pointer motboardlogo">MOtBOARD
                            {userState.isLogged ? <span className="megrim userGreeting">Hello {userState.firstName}</span>: ''}
                            </span>
                            {/*<Trans name={'React.js'}>*/}
                                {/*React makes it*/}
                            {/*</Trans>*/}
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
                                <a className="nav-link" style={{'font-size': '1.4em'}} onClick={() => {
                                    this.props.history.push("/blogs");
                                }}>blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger pointer" style={{'font-size': '1.4em'}}
                                   onClick={() => {
                                       this.props.history.push("/Team");
                                   }}>Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger pointer" style={{'font-size': '1.4em'}}><div>
                                    <RaisedButton
                                        onClick={this.handleClick}
                                        label="Lan"
                                    />
                                    <Popover
                                        open={this.state.open}
                                        anchorEl={this.state.anchorEl}
                                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                        onRequestClose={this.handleRequestClose}
                                    >
                                        <Menu>
                                            <MenuItem primaryText="el" onClick={() => changeLanguage('el')}/>
                                            <MenuItem primaryText="en" onClick={() => changeLanguage('en')}/>
                                        </Menu>
                                    </Popover>
                                </div></a>
                            </li>
                            {userState.isLogged ? <ProfilePic/>: '' }
                        </ul>
                    </nav>
                </div>
                <div className="mt-5 pt-5">
                    <Route exact path="/" render={() => (

                        <StyleRoot>
                            <div className=" slideInLeft" style={styles.slideInLeft}>
                                <BalloonPage/>
                            </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/images" render={() => (
                        <StyleRoot>
                            <div className=" slideInRight mt-5" style={styles.slideInRight}>
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
                        <StyleRoot>
                        <div className=" fadeInUp" style={styles.fadeInUp}>
                            <ColorsGenerator/>
                        </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/About" render={() => (
                        <StyleRoot>
                            <div className=" slideInRight mt-5" style={styles.slideInRight}>
                                <About/>
                            </div>
                        </StyleRoot>
                    )}/>
                    <Route exact path="/Team" render={() => (
                        <StyleRoot>
                            <div className=" slideInRight mt-5" style={styles.slideInRight}>
                                <Team/>
                            </div>
                        </StyleRoot>
                    )}/>

                    <Route exact path="/singlemotboard" render={() => (
                        <div>
                            <Single_Motboard/>
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
                    <Route exact path="/upload" render={() => (
                        <div>
                            <Upload/>
                        </div>
                    )}/>
                    <Route exact path="/myBoards" render={() => (
                        <div>
                            <UserAfterLogin/>
                        </div>
                    )}/>


                    <Route exact path="/userboards" render={() => (
                            <div>
                                <User_Boards/>
                            </div>
                    )}/>


                    <Route exact path="/blogs" render={() => (
                        <div>
                            <Blogs/>
                        </div>
                    )}/>
                    <Route exact path="/Boards" render={() => (
                        <StyleRoot>
                            <div className=" slideInRight mt-5" style={styles.slideInRight}>
                                <Board/>
                            </div>
                        </StyleRoot>
                    )}/>

                    <Route exact path="/home" render={()=>(
                        <div>
                            <React.Fragment>
                            {/*<UserHomePage/>*/}
                                <div className="content">
                                    <UserAfterLogin/>
                                </div>
                            </React.Fragment>
                        </div>
                    )}/>
                    <Route exact path="/myAccount" render={()=>(
                        <div>
                            <React.Fragment>
                                {/*<UserHomePage/>*/}
                                <div className="content">
                                    <UpdateUser/>
                                </div>
                            </React.Fragment>
                        </div>
                    )}/>
                </div>
                <div className="fixed-bottom chat-sticky">
                    <Chat />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        loginStateProp : state.loginStateData,
    };
}
export default withRouter(connect(mapStateToProps,null)(Homepage));

