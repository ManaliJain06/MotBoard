import React from 'react';
import Avatar from 'material-ui/Avatar';
import colors from '../Images/colors.jpg';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOutAction} from '../actions/index';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
class ProfilePic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openMenu: false
        }
        this.signOutResponse = this.signOutResponse.bind(this);
        this.signOutActionCall = this.signOutActionCall.bind(this);
    }

    handleOpenDropDown = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            openMenu: true,
            anchorEl: event.currentTarget
        });
    };

    handleCloseDropDown = () => {
        this.setState({
            openMenu: false
        });
    };

    handleSignOut = () => {
        this.signOutActionCall(this.signOutResponse);
    }

    signOutResponse(){
        let state = this.props.loginStateProp;
        if( state.signOutError === true){
           alert("Logout error occured. Please logout again");
        } else {
            this.props.history.push("/");
        }
    }

    signOutActionCall(callback){
        this.props.signOutAction();
        setTimeout(callback,1000);
    }
    render(){
        const image = this.props.loginStateProp.userData.profileImage;
        return (
            <div>
                <Avatar src={image} className="pointer" onClick={this.handleOpenDropDown}/>
                <Popover
                    open={this.state.openMenu}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleCloseDropDown}
                    animation={PopoverAnimationVertical}
                    useLayerForClickAway={true}
                    canAutoPosition={true}
                    autoCloseWhenOffScreen={true}>
                    <Menu>
                        <MenuItem primaryText="My Motboards" onClick={() => {
                            this.props.history.push("/home");
                            this.setState({
                                openMenu: false
                            });
                        }}/>
                        <MenuItem primaryText="My Account" onClick={() => {
                            this.props.history.push("/myAccount");
                            this.setState({
                                openMenu: false
                            });
                        }}/>
                        <MenuItem primaryText="Sign out" onClick={() => {
                            this.handleSignOut();
                            this.setState({
                                openMenu: false
                            });
                        }}/>
                    </Menu>
                </Popover>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        loginStateProp : state.loginStateData,
    };
}
export default withRouter(connect(mapStateToProps,{signOutAction})(ProfilePic));

