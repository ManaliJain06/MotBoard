import ChatBot from 'react-simple-chatbot';
import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chaticon from 'material-ui/svg-icons/communication/chat';
import Close from 'material-ui/svg-icons/navigation/close';
import { ThemeProvider } from 'styled-components';
import '../css/chat.css';

const style = {
    marginRight: 20
};

const theme = {
    fontFamily: 'inherit',
    headerBgColor: '#fff176',
    headerFontColor: '#fff',
    headerFontSize: '10px',
    botBubbleColor: '#fff176',
    botFontColor: 'black',
    userBubbleColor: '#fff',
    userFontColor: 'black',
    footerFontColor:'black'
};

let steps = [
    {
        id: '1',
        message: 'What is your favourite color?',
        trigger: '2',
    },
    {
        id: '2',
        user:true,
        trigger:'4'
    },
    {
        id:'4',
        message:'done'
    }
];
class Chat extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        chatOpen: false
    };

    closechat() {
        this.setState({
            chatOpen: false
        })
    }
    openchat() {
        this.setState({
            chatOpen: true
        })
    }

    render() {
        return (
            <div className="chat-sticky">
                {this.state.chatOpen ?
                    <div className="chat-bg">
                        <ThemeProvider theme={theme}>
                            <ChatBot steps={steps} headerComponent={
                                <div style={{'background-color':'#fff176'}}>
                                    <Close onClick={() => {
                                        this.closechat()
                                    }}   />
                                </div>
                            } />

                        </ThemeProvider>
                    </div>
                    :
                    <div onClick={() => {
                        this.openchat()
                    }}>
                        <FloatingActionButton backgroundColor={'#fff176'} style={style}>
                            <Chaticon/>
                        </FloatingActionButton>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Chat);
