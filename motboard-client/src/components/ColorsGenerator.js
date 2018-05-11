import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/colorgen.css';
import Artyom from 'artyom.js';
const artyom = new Artyom();

// Start the commands !


class ColorsGenerator extends Component{
    constructor(props){
        super(props);
        this.state={
            RandomColor1:'#ef9a9a',
            RandomColor2:'#ce93d8',
            RandomColor3:'#80deea',
            RandomColor4:'#e6ee9c',
            RandomColor5:'#c2185b',
            RandomColor6:'#b2dfdb',
        }
    }
    componentWillMount(){
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

        artyom.say("Hello. My name is Rainbow ! I can help you choose colors");
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
            {
                indexes: ['Magic'],
                action: (i,wildcard) => {
                    this.generateColors();
                        var currentTime = new Date().getTime();
                        while (currentTime + 500 >= new Date().getTime()) {
                        }
                    this.generateColors();

                    artyom.fatality().then(() => {
                        artyom.say("There you go!!");
                    });
                }
            },
        ]);

    }
    generateColors = () =>{
        console.log('Random color generator');
        var letters = '0123456789ABCDEF';
        var color1 = '#';
        var color2 = '#';
        var color3 = '#';
        var color4 = '#';
        var color5 = '#';
        var color6 = '#';
        for (var i = 0; i < 6; i++) {
            color1 += letters[Math.floor(Math.random() * 16)];
            color2 += letters[Math.floor(Math.random() * 16)];
            color3 += letters[Math.floor(Math.random() * 16)];
            color4 += letters[Math.floor(Math.random() * 16)];
            color5 += letters[Math.floor(Math.random() * 16)];
            color6 += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({
            'RandomColor1':color1,
            'RandomColor2':color2,
            'RandomColor3':color3,
            'RandomColor4':color4,
            'RandomColor5':color5,
            'RandomColor6':color6,
        });
    }

    render(){

        return (
            <div>
                <div class="row justify-content-center mb-5">
                    <button className="generateColorButton Questrial mt-5" onClick={() => {
                        this.generateColors();
                    }}>Show me some magic
                    </button>
                </div>
            <div class="row">
                <div className="col-md-2 onecolumn Questrial" style={{'background-color': this.state.RandomColor1}}>{this.state.RandomColor1}</div>
                <div className="col-md-2 onecolumn Questrial" style={{'background-color': this.state.RandomColor2}}>{this.state.RandomColor2}</div>
                <div className="col-md-2 onecolumn Questrial" style={{'background-color': this.state.RandomColor3}}>{this.state.RandomColor3}</div>
                <div className="col-md-2 onecolumn Questrial" style={{'background-color': this.state.RandomColor4}}>{this.state.RandomColor4}</div>
                <div className="col-md-2 onecolumn Questrial" style={{'background-color': this.state.RandomColor5}}>{this.state.RandomColor5}</div>
                <div className="col-md-2 onecolumn Questrial" style={{'background-color': this.state.RandomColor6}}>{this.state.RandomColor6}</div>
            </div>
            </div>
        )
    }
}

export default withRouter(ColorsGenerator);