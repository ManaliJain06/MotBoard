import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div> hi</div>
        )
    }
}

export default withRouter(About);
// const homepage = withRouter(Homepage);
// export default Homepage;
// const homepage = withRouter(Homepage);
// export default Homepage;