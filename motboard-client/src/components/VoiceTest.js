import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Artyom from 'artyom.js';

const artyom = new Artyom();


// Start the commands !
artyom.initialize({
    lang: "en-US", // GreatBritain english
    continuous: true, // Listen forever
    soundex: true,// Use the soundex algorithm to increase accuracy
    debug: true, // Show messages in the console
    executionKeyword: "Do it now",
    listen: true, // Start to listen commands !

    // If providen, you can only trigger a command if you say its name
    // e.g to trigger Good Morning, you need to say "Jarvis Good Morning"
    name: "Rainbow"
}).then(() => {
    console.log("Artyom has been succesfully initialized");
}).catch((err) => {
    console.error("Artyom couldn't be initialized: ", err);
});

//artyom.say("Hello. My name is Rainbow ! I can help you choose colors");

artyom.on(['Good morning','Good afternoon']).then((i) => {
    switch (i) {
        case 0:
            artyom.say("Good morning, how are you?");
            break;
        case 1:
            artyom.say("Good afternoon, how are you?");
            break;
    }
});

// Smart command (Short code artisan way), set the second parameter of .on to true
artyom.on(['Repeat after me *'] , true).then((i,wildcard) => {
    artyom.say("You've said : " + wildcard);
});

// or add some commandsDemostrations in the normal way
artyom.addCommands([
    {
        indexes: ['Hello','Hi','is someone there'],
        action: (i) => {
            artyom.say("Hello, it's me");
        }
    },
    {
        indexes: ['Repeat after me *'],
        smart:true,
        action: (i,wildcard) => {
            artyom.say("You've said : "+ wildcard);
        }
    },
    // The smart commands support regular expressions
    {
        indexes: [/Good Morning/i],
        smart:true,
        action: (i,wildcard) => {
            artyom.say("You've said : "+ wildcard);
        }
    },
    {
        indexes: ['shut down yourself'],
        action: (i,wildcard) => {
            artyom.fatality().then(() => {
                console.log("Artyom succesfully stopped");
            });
        }
    },
]);



class VoiceTest extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container" style={{"padding-top":"55px"}}>

            </div>

        )
    }
}

export default withRouter(VoiceTest);