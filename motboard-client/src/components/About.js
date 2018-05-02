import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import moodboard1 from '../Images/moodboard1.png';
import passion from '../Images/passion.jpg';
import about from '../Images/about.jpg';
import $ from 'jquery';
import {jQuery} from 'jquery';
class About extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        var terms = ["logo designs", "favourite colors", "favourite textures"];

        function rotateTerm() {
            var ct = $("#rotate").data("term") || 0;
            $("#rotate").data("term", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
                .delay(1300).fadeOut(200, rotateTerm);
        }

        $(rotateTerm);
    }

    render(){
        return (
            <div>
                {/*<div className="row aboutbigimage">*/}
                    {/*<img src={about}/>*/}
                {/*</div>*/}
                <div class="container pt-5 mt-5" style={{"padding":"25px"}}>
                    <div class="row">
                        <div class="col-md-7" >
                            <img src={moodboard1} />
                        </div>
                        <div class="col-md-5 " style={{"padding":"30px","height":"auto"}}>
                            <div class="container Questrial">
                                <p>Our Wikipedia quotes <strong>Mood Board</strong> as:</p>
                                <blockquote cite="https://en.wikipedia.org/wiki/Mood_board">
                                    an arrangement of images, materials, pieces of text, etc., intended to evoke or project a particular style or concept.
                                    <hr/><small>"we put together a mood board with key images and words that best convey the essence of the brand"</small>
                                </blockquote>

                            </div>
                            <h1 style={{
                                "color": "#424242",
                                "padding-top": "30px",
                                "text-align": "right",
                                "font-size": "4em"
                            }}>Just the right Caffeine you need.
                            </h1>
                            <p style={{"text-align":"right","font-size": "25px"}}>Share your <span id="rotate" style={{"text-shadow": "black 0px 0px 0.1px"}}>this</span></p>
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
