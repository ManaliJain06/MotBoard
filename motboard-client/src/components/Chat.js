import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20,
};

class Chat extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'chat-sticky'} >
                <FloatingActionButton style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default withRouter(Chat);
