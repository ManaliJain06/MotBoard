import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/blogs.css'

class Blogs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <div>
                <video className="fullscreen-bg__video" loop muted autoPlay>
                    <source src="http://portal.codeitwithme.com/master_images/droplets.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="row Justify-content-center"
                 style={{"padding-top": "70px", "padding-bottom": "70px", "margin-top": "90px"}}>
                <div className={"blogfont amatic"}> Share Your <b>MotBoard</b> Stories</div>
            </div>

            <div style={{"background-color": "#fff"}}>
                <div className="container"
                     style={{"padding-top": "55px", "padding-bottom": "70px", "margin-top": "100px"}}>
                    <div>
                        <div id="whyMotbaord" className="container indexZ">
                            <div className="row justify-content-start">
                                <div className="mr-5 mb-5 Questrial inspired-text">
                                    How do I get Inspired?
                                </div>
                                <br/>
                            </div>
                            <div className="row justify-content-center">

                                <div className="card cardboxBottom mr-5 Questrial cardboxWidth"
                                     style={{"width": "30rem"}}>
                                    <img className="card-img-top" src={'...'} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            "text-align": "center",
                                            "font-size": "30px",
                                            "color": "#DBB747"
                                        }}>Collect</h5>
                                        <p className="card-text" style={{"text-align": "center"}}>Collect your
                                            MotBoards and access
                                            them whenever you need some inspiration.</p>
                                    </div>
                                </div>

                                <div className="card cardboxBottom mr-5 Questrial cardboxWidth"
                                     style={{"width": "30rem"}}>
                                    <img className="card-img-top" src={'...'} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            "text-align": "center",
                                            "font-size": "30px",
                                            "color": "#DBB747"
                                        }}>Share</h5>
                                        <p className="card-text" style={{"text-align": "center"}}>Share your
                                            MotBoards and help your
                                            fellow creative people. Creativity is contagious, pass it on.</p>
                                    </div>
                                </div>

                                <div className="card cardboxBottom mr-5 Questrial cardboxWidth"
                                     style={{"width": "30rem"}}>
                                    <img className="card-img-top" src={'...'} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            "text-align": "center",
                                            "font-size": "30px",
                                            "color": "#DBB747"
                                        }}>Inspire</h5>
                                        <p className="card-text" style={{"text-align": "center"}}>Go ahead, get
                                            inspired. Think left and think right and think low and think high and of
                                            course, think diagonal! </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    }
}

export default withRouter(Blogs);
