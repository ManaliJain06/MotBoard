// check the prop is logged in, in the render otherwise push signup
import React, {Component} from 'react';
import '../css/landingPage.css';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ProfilePic from './ProfilePic';
class UserHomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let userState = this.props.loginStateProp;
        if(userState.isLogged === false){
            this.props.history.push("/signIn");

        }
        return(
            <div className ="banner">
                <div className="row">
                    <div className="col-sm-3" style={{"padding-left": "40px"}}>
                       <span className="megrim blackColor pt-3 pl-5">Hello {userState.firstName}</span>
                    </div>
                    <div className="col-sm-9">
                       <ul className="text-uppercase userMenu">
                           <li>
                               <button className="Questrial">Arrange Images</button>
                           </li>
                           <li>
                               <button className="Questrial">Publish Publicly</button>
                           </li>
                           <li >
                                <ProfilePic/>
                           </li>
                       </ul>
                    </div>
                </div>
                <div className="pt-5 mt-5">
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
export default withRouter(connect(mapStateToProps,null)(UserHomePage));