import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/colorgen.css';
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