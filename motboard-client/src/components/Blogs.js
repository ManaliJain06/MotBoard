import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/blogs.css'
import Quote from 'material-ui/svg-icons/editor/format-quote';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
const style = {
    marginRight: 20,

};
const customContentStyle = {
    width: '30%',
    maxWidth: 'none',
};
class Blogs extends Component{
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({
            open: false
        });
        console.log('blog-text-to-submit: '+this.refs.blogContent.getValue());
        var blogJSONtoSend ={
            'text': this.refs.blogContent.getValue()
        }
        //TODO: Call to backend here
    };

    constructor(props){
        super(props);
        this.state={
            open: false,
            blogs : [
                {
                    'text':'When ever I get a creative block, MotBoard will be the first place I turn to.'
                },
                {
                    'text':'I was once asked to create a kids website and was confused about eh colors. MotBoard to the rescue!'
                },
                {
                    'text':'When ever I get a creative block, MotBoard will be the first place I turn to.'
                },
                {
                    'text':'I was once asked to create a kids website and was confused about eh colors. MotBoard to the rescue!'
                },
                {
                    'text':'When ever I get a creative block, MotBoard will be the first place I turn to.'
                },
                {
                    'text':'I wI was once asked to create a kids website and was confused about eh colors. MotBoard to the rescue!Board to the rescue!Board to the rescue!I wI was once asked to create a kids website and was confused about eh colors.'
                }
            ]
        }
    }
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
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
                                    Share your stories and spread the <b>Inspiration</b>.
                                </div>
                                <br/>
                            </div>
                            <FloatingActionButton>
                                <ContentAdd
                                onClick={this.handleOpen}/>
                            </FloatingActionButton>
                            <div className="row justify-content-center">

                                {
                                    this.state.blogs.map((blog,index) => (
                                        <div className="card cardboxBottom m-2 Questrial cardboxWidth"
                                             style={{"width": "30rem"}}>
                                            <div className="card-body">
                                                <Quote style={{
                                                    "text-align": "left",
                                                    "font-size": "70px",
                                                    "color": "#FFD639"
                                                }}/>
                                                <p className="card-text" style={{"text-align": "center"}}>{blog.text}</p>
                                                <Quote style={{
                                                    "align-items": "right",
                                                    "font-size": "70px",
                                                    "color": "#FFD639"
                                                }}/>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                        <Dialog
                            title="Write your Story"
                            actions={actions}
                            modal={true}
                            contentStyle={customContentStyle}
                            open={this.state.open}
                        >
                            <TextField
                                hintText="Please limit to 220 characters"
                                style={{'border-top':'0.1px #424242 solid','border-radius':'5px'}}
                                multiLine={true}
                                rows={10}
                                rowsMax={5}
                                fullWidth={true}
                                maxLength="220"
                                ref="blogContent"
                            /><br />
                        </Dialog>
                    </div>
                </div>


            </div>
        </div>
    }
}

export default withRouter(Blogs);
