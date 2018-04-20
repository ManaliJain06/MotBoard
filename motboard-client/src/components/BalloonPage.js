import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/landingPage.css';
import balloon from '../Images/balloon.jpg';

class BalloonPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <div className="row">
                <div className="Imagecontainer col-lg-9">
                    <img src={balloon} className="balloon ml-5 indexZ" />
                </div>
                <div className="col-lg-3 mt-5 pt-5">
                    <div className="mt-5 pt-5">
                        <button className="ybutton mt-5">SIGN UP</button>
                        <br/>
                            <button className="ybutton">SIGN IN</button>
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
                    <div className="card cardbox mr-5 Questrial cardboxWidth">
                        <div className=" justify-content-center p-5 ">
                            <i className="material-icons icon">share</i>
                        </div>
                        <div className="card-body cardbackColor">
                            <hr/>
                                <p className="card-text alignCenter">Share your MotBoards and help your
                                    fellow creative people draw some inspiration from.</p>
                        </div>
                    </div>

                    <div className="card cardbox mr-5 Questrial cardboxWidth">
                        <div className="row justify-content-center p-5 ">
                            <i className="material-icons icon">collections</i>
                        </div>
                        <div className="card-body cardbackColor">
                            <hr/>
                                <p className="card-text alignCenter">Collect your MotBoards and access
                                    them whenever you need some inspiration.</p>
                        </div>
                    </div>

                    <div className="card cardbox Questrial cardboxWidth">
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
    }
    }

    export default withRouter(BalloonPage);
