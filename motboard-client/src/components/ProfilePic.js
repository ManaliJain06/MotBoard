import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import colors from '../Images/colors.jpg';
import UserDropDownMenu from './UserDropDownMenu';


const style = {margin: 5};

const ProfilePic = () => (

        <Avatar src={colors} onClick={
            <UserDropDownMenu/>
        }/>

);
export default ProfilePic;
