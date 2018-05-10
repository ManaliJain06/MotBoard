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
    headerFontColor: 'black',
    headerFontSize: '10px',
    botBubbleColor: '#BA68C8',
    botFontColor: 'black',
    userBubbleColor: '#fff',
    userFontColor: 'black',
    footerFontColor:'black'
};
var name='';
let steps = [
    {
        id: '1',
        message: 'Hi there! Welcome to Motboard.',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Before you start, guess what my Favorite color is?',
        trigger: '3',
    },
    {
        id: '3',
        options: [
            { value: 1, label: 'Orange', trigger: '4' },
            { value: 2, label: 'Yellow', trigger: '5' },
            { value: 3, label: 'Blue', trigger: '4' },
        ],
    },
    {
        id: '4',
        message: 'Wrong answer, try again.',
        trigger: '3',
    },
    {
        id: '5',
        message: 'Awesome! You are a telepath!',
        trigger: '6',
    },
    {
        id: '6',
        message: 'Oh! I forgot to ask your name. and you are...?',
        trigger: '7',
    },
    {
        id: '7',
        user: true,
        validator: (value) => {
            if (!isNaN(value)) {
                return 'Enter word. I am not so good at numbers you kno. ugh!';
            }
            else{
                name = value ;
            }
            return true;
        },
        trigger: '8',
    },
    {
        id: '8',
        message: 'Hey there {previousValue}. I am here to help you suggest colors. Choose one below and I will suggest what color could be a good match.',
        trigger: '9',
    },
    {
        id: '9',
        options: [
            { value: 1, label: 'Orange', trigger: '10' },
            { value: 2, label: 'Yellow', trigger: '12' },
            { value: 3, label: 'Green', trigger: '13' },
        ],
    },
    {
        id: '10',
        message: 'Hmm.. I think Orange looks good with blue',
        trigger:'11'
    },
    {
        id: '11',
        component: (
            <div style={{'overflow':'hidden'}}>
                <div style={{'background-color':'#29B6F6','height':'50px','width':'100vw','text-align':'center'}}>#29B6F6</div>
                <div style={{'background-color':'#B3E5FC','height':'50px','width':'100vw','text-align':'center'}}>#B3E5FC</div>
                <div style={{'background-color':'#0277BD','height':'50px','width':'100vw','text-align':'center'}}>#0277BD</div>
                <div style={{'background-color':'#FF8A65','height':'50px','width':'100vw','text-align':'center'}}>#FF8A65</div>
                <div style={{'background-color':'#FF9E80','height':'50px','width':'100vw','text-align':'center'}}>#FF9E80</div>
                <div style={{'background-color':'#FF7043','height':'50px','width':'100vw','text-align':'center'}}>#FF7043</div>
            </div>
        ),
        trigger: '9',
    },
    {
        id: '12',
        component: (
            <div style={{'overflow':'hidden'}}>
                <div style={{'background-color':'#FFFDE7','height':'50px','width':'100vw','text-align':'center'}}>#FFFDE7</div>
                <div style={{'background-color':'#FFFF8D','height':'50px','width':'100vw','text-align':'center'}}>#FFFF8D</div>
                <div style={{'background-color':'#FFF176','height':'50px','width':'100vw','text-align':'center'}}>#FFF176</div>
                <div style={{'background-color':'#B39DDB','height':'50px','width':'100vw','text-align':'center'}}>#B39DDB</div>
                <div style={{'background-color':'#5E35B1','height':'50px','width':'100vw','text-align':'center'}}>#5E35B1</div>
                <div style={{'background-color':'#D1C4E9','height':'50px','width':'100vw','text-align':'center'}}>#D1C4E9</div>
            </div>
        ),
        trigger: '9',
    },
    {
        id: '13',
        component: (
            <div style={{'overflow':'hidden'}}>
                <div style={{'background-color':'#C5E1A5','height':'50px','width':'100vw','text-align':'center'}}>#C5E1A5</div>
                <div style={{'background-color':'#7CB342','height':'50px','width':'100vw','text-align':'center'}}>#7CB342</div>
                <div style={{'background-color':'#558B2F','height':'50px','width':'100vw','text-align':'center'}}>#558B2F</div>
                <div style={{'background-color':'#D7CCC8','height':'50px','width':'100vw','text-align':'center'}}>#D7CCC8</div>
                <div style={{'background-color':'#A1887F','height':'50px','width':'100vw','text-align':'center'}}>#A1887F</div>
                <div style={{'background-color':'#6D4C41','height':'50px','width':'100vw','text-align':'center'}}>#6D4C41</div>
            </div>
        ),
        trigger: '9',
    },
];
class Chat extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
        }
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
                            <ChatBot steps={steps}
                                     headerTitle="Speech Recognition"
                                     recognitionEnable={true}
                                     headerComponent={
                                         <div style={{'background-color':'#BA68C8'}}>
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
                        <FloatingActionButton backgroundColor={'#BA68C8'} style={style}>
                            <Chaticon/>
                        </FloatingActionButton>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Chat);
