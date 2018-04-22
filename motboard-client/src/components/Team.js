import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Team extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="row">
                    <div className="Questrial col-lg-9">
                        <div className="row justify-content-center">
                            <div className="col-md-9 cardbox">
                                <span className="TeamContainer">Team Members:</span><br/>
                                <span className="TeamContainer">Manali Jain</span><br/>
                                    <span className="TeamText">I am a web UI Enthusiast. I am Passionate about coding.
                                    My technical interests are React.Js, Node.Js, Java.</span>
                                    <br/>
                                <span className="TeamContainer"> Manvitha </span><br/>
                                    <span className="TeamText"></span>
                                    <br/>
                                <span className="TeamContainer">Sanjay</span>
                                     <span className="TeamText"></span>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-5 pt-5">
                        <div className="mt-5 pt-5">
                            <button className="ybutton mt-5" onClick={() => {
                                this.props.history.push("/signUp");
                            }}>SIGN UP</button>
                            <br/>
                            <button className="ybutton" onClick={() => {
                                this.props.history.push("/signIn");
                            }}>SIGN IN</button>
                        </div>
                    </div>
                </div>

                <div id="whyMotbaord" className="container indexZ">
                    <div className="row justify-content-end ">
                        <div className="mr-5 Questrial inspired">
                            Stay Inspired!
                        </div>
                        <br/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card cardboxBottom mr-5 Questrial cardboxWidth">
                            <div className="row justify-content-center p-5 ">
                                <i className="material-icons icon">share</i>
                            </div>
                            <div className="card-body cardbackColor">
                                <hr/>
                                <p className="card-text alignCenter">Share your MotBoards and help your
                                    fellow creative people draw some inspiration from.</p>
                            </div>
                        </div>

                        <div className="card cardboxBottom mr-5 Questrial cardboxWidth">
                            <div className="row justify-content-center p-5 ">
                                <i className="material-icons icon">collections</i>
                            </div>
                            <div className="card-body cardbackColor">
                                <hr/>
                                <p className="card-text alignCenter">Collect your MotBoards and access
                                    them whenever you need some inspiration.</p>
                            </div>
                        </div>

                        <div className="card cardboxBottom Questrial cardboxWidth">
                            <div className="row justify-content-center p-5 ">
                                <i className="material-icons icon">palette</i>
                            </div>
                            <div className="card-body cardbackColor">
                                <hr/>
                                <p className="card-text alignCenter">GET INSPIRED</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="row justify-content-center footercss">
                        <div className="row mt-3">CMPE 280 Project - SPRING 2018</div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default withRouter(Team);