import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SingleMotboard from './Single_Motboard';
class Board extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <SingleMotboard/>
            </div>
        )
    }
}

export default withRouter(Board);