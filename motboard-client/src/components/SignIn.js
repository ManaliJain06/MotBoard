import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/signup.css';
import '../css/smiley.css';
import {signinAction} from '../actions';
import signin from '../Images/signin.jpg';
import Radium, {StyleRoot} from 'radium';
import {pulse} from 'react-animations';
import * as validation from '../validation/LoginValidation';
import $ from 'jquery';
import {jQuery} from 'jquery';
const styles = {
    pulse: {
        animation: 'x 0.5s ease-in-out',
        animationName: Radium.keyframes(pulse, 'pulse'),
    },
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                "username": "",
                "password": ""
            },
            messageDivLogin: ''
        }
        this.signInResponse = this.signInResponse.bind(this);
        this.signInActionCall = this.signInActionCall.bind(this);
    }

    activateSmiley =()=> {
        // var ct = $("#rotate").data("term") || 0;
        // $("#rotate").data("term", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
        //
        console.log('activated smiley');
        // $(".lefthand").addClass("smileyLefthand");
        // $(".righthand").addClass("smileyRighthand");
        //$(".lefthand").hide();
        $(".righthand").hide();
    }

    DeactivateSmiley =()=> {
        console.log('Deactivated smiley');
    }

    handleSignInSubmit() {
        var valid = validation.login(this.state.userdata);
        if(valid === ''){
            // var x = function()
            this.signInActionCall(this.signInResponse);
        }else{
            this.setState({
                ...this.state,
                messageDivLogin: valid
            });
        }

    }

    signInResponse(){
        let state = this.props.loginStateProp;
        if( state.isLogged === true){
            this.props.history.push("/home");
        } else if(state.isLogged === false && state.error === true){
            this.setState({
                ...this.state,
                messageDivLogin: "The user is not found. The reason is either " +
                "you have not signed up or entered incorrect credentials"
            });
        }
    }

    signInActionCall(callback){
        this.props.signinAction(this.state.userdata);
        setTimeout(callback,1000);
    }

    render() {
        let messageDivLogin =null;
        if(this.state.messageDivLogin !== ''){
            messageDivLogin = <div className="clearfix">
                <div className="alert alert-danger text-center" role="alert">
                    {this.state.messageDivLogin}
                </div>
            </div>;
        } else{
            messageDivLogin = <div></div>;
        }
        return (
            <div>
                <StyleRoot>
                    <div className="pulse" style={styles.pulse}>
                        <div className="row justify-content-center">
                            <div className="col-md-6 indexZ" style={{'height':'40vw','object-fit':'contain','margin-right':'20px','margin-top':'20px'}} >
                                {/*<img src={signin} alt="hello" style={{'height':'40vw','object-fit':'contain','margin-right':'20px'}} className={"indexZ"}/>*/}
                                {/*<div>*/}
                                    {/*<form>*/}
                                    {/*<p>*/}
                                        {/*<input id="happy" type="radio" name="smiley" value="Happy" checked="checked"/>*/}
                                        {/*<label for="Happy">:)</label>*/}
                                    {/*</p>*/}
                                    {/*<p>*/}
                                        {/*<input id="normal" type="radio" name="smiley" value="Normal"/>*/}
                                        {/*<label for="Normal">:|</label>*/}
                                    {/*</p>*/}
                                    {/*<p>*/}
                                        {/*<input id="angry" type="radio" name="smiley" value="Angry"/>*/}
                                        {/*<label for="Angry">:(</label>*/}
                                    {/*</p>*/}
                                    {/*</form>*/}
                                {/*</div>*/}
                                <div className="smiley">
                                    <div className="eyes">
                                        <div className="eye"></div>
                                        <div className="eye"></div>
                                    </div>
                                    <div className="mouth"></div>
                                    <div className="lefthand"></div>
                                    <div className="righthand"></div>
                                </div>
                            </div>
                            <div className="col-md-4 cardbox">
                                {messageDivLogin}
                                <h4 className='Questrial' style={{'margin-bottom':'10px','text-align':'center'}}>SIGN IN</h4>
                                <input type="email" className="inputfield" placeholder="Email"
                                       value={this.state.userdata.username}
                                       onChange={(event) => {
                                           this.setState({
                                               userdata: {
                                                   ...this.state.userdata,
                                                   username: event.target.value
                                               }
                                           });
                                       }}
                                /><br/>
                                <input type="password" className="inputfield" placeholder="Password" id={"happy"}
                                       value={this.state.userdata.password}
                                       onChange={(event) => {
                                           this.setState({
                                               userdata: {
                                                   ...this.state.userdata,
                                                   password: event.target.value
                                               }
                                           });
                                       }}
                                       onFocus={this.activateSmiley}
                                       onBlur={this.DeactivateSmiley}
                                /><br/>
                                <div className="row justify-content-center">
                                    <button className="ybutton" onClick={() => {
                                        this.handleSignInSubmit();
                                    }}>SIGN IN
                                    </button>
                                </div>
                                <div className="row justify-content-center">
                                    <button className="ybuttonSecondary" onClick={() => {
                                        this.props.history.push("/signUp");
                                    }}>or SIGN UP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </StyleRoot>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("state App", state)
    return{
        loginStateProp : state.loginStateData,
    };
}
export default withRouter(connect(mapStateToProps,{signinAction})(SignIn));
