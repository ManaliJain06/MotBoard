import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import moodboard1 from '../Images/moodboard1.png';
import passion from '../Images/passion.jpg';
class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div class="container pt-5 mt-5" style={{"padding":"25px"}}>
                    <div class="row">
                        <div class="col-md-7" >
                            <img src={moodboard1} />
                        </div>
                        <div class="col-md-4 " style={{"padding":"30px","height":"auto"}}>
                            <div class="container Questrial">
                                <p>Our Wikipedia quotes <strong>Mood Board</strong> as:</p>
                                <blockquote cite="https://en.wikipedia.org/wiki/Mood_board">
                                    an arrangement of images, materials, pieces of text, etc., intended to evoke or project a particular style or concept.
                                    <hr/><small>"we put together a mood board with key images and words that best convey the essence of the brand"</small>
                                </blockquote>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 " style={{"padding": "30px", "height": "auto"}}>
                            <div className="container Questrial">
                                <p>we, at Motboard quote <strong>Mood Board</strong> as:</p>
                                <blockquote cite="https://en.wikipedia.org/wiki/Mood_board">
                                    an inspiration world
                                    <hr/>
                                    <small>"A rainbow place where anyone loves to get lost."
                                    </small>
                                </blockquote>
                                <div className="row justify-content-end ">
                                    <div className="mr-5 mb-3 Questrial" style={{'font-size':'70px','color':'rgba(0,0,0,0.1)'}}>
                                        Passion led us here.
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={passion}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(About);
