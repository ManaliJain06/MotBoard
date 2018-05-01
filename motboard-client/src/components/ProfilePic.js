import React from 'react';
import Avatar from 'material-ui/Avatar';
import colors from '../Images/colors.jpg';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
class ProfilePic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openMenu: false
        }
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

    render(){
        const image = this.props.loginStateProp.userData.profileURL;
        return (
            <div>
                <Avatar src={image} className="pointer" onClick={this.handleOpenDropDown}/>
                <Popover
                    open={this.state.openMenu}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleCloseDropDown}
                    animation={PopoverAnimationVertical}>
                    <Menu>
                        <MenuItem primaryText="My Motboards" onClick={() => {
                            this.props.history.push("/home");
                        }}/>
                        <MenuItem primaryText="My Account" onClick={() => {
                            this.props.history.push("/myAccount");
                        }}/>
                        <MenuItem primaryText="Sign out" onClick={() => {
                            this.props.history.push("/myAccount");
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
export default withRouter(connect(mapStateToProps,null)(ProfilePic));

