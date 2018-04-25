import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import manvi from '../Images/manvi.png';
import sanjay from '../Images/sanjay.jpg';
import manali from '../Images/manali.jpg';
import Radium, {StyleRoot} from 'radium';
import { fadeInLeft } from 'react-animations';


const styles = {
    fadeInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInLeft, 'bounce'),
    }
}

class Team extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container" style={{"padding-top":"20px", "padding-bottom":"55px"}}>
                <div>
                    <div id="whyMotbaord" className="container indexZ">
                        <div className="row justify-content-end ">
                            <StyleRoot>
                                <div className="fadeInLeft" style={styles.fadeInLeft}>
                                    <p className="mr-5 mb-3 Questrial inspired" style={{'text-align':'center','font-size':'40px'}}>
                                        The brains behind MotBoard.
                                    </p>
                                </div>
                            </StyleRoot>
                            <br/>
                        </div>
                        <div className="row justify-content-center">

                            <div className="card cardboxBottom mr-5 Questrial cardboxWidth" style={{"width": "30rem","border":"none"}}>
                                <img className="card-img-top" style={{"border-radius": "50%"}} src={manali} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{"text-align":"center","font-size":"30px","color":"#DBB747"}}>Manali</h5>
                                    <p className="card-text" style={{"text-align":"center"}}>I am a web UI Enthusiast. I am Passionate about coding.
                                        My technical interests are React.Js, Node.Js, Java.</p>
                                </div>
                            </div>

                            <div className="card cardboxBottom ml-5 mr-5 Questrial cardboxWidth" style={{"width": "30rem","border":"none"}}>
                                <img className="card-img-top" style={{"border-radius": "50%"}} src={manvi} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{"text-align":"center","font-size":"30px","color":"#DBB747"}}>Manvitha</h5>
                                    <p className="card-text" style={{"text-align":"center"}}>I am a digital nomad passionate about web development.I am always inspired by random things like the precision of spider web, beautiful sunrise and motivational quotes.</p>
                                </div>
                            </div>

                            <div className="card cardboxBottom ml-5 mr-5 Questrial cardboxWidth" style={{"width": "30rem","border":"none"}}>
                                <img className="card-img-top" style={{"border-radius": "50%"}} src={sanjay} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{"text-align":"center","font-size":"30px","color":"#DBB747"}}>Sanjay</h5>
                                    <p className="card-text" style={{"text-align":"center"}}>Go ahead, get inspired. Think left and think right and think low and think high and of course, think diagonal! </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Team);