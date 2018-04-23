import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './components/Homepage';
class App extends Component {
  render() {
    return (
          <div>
              <MuiThemeProvider>
              <BrowserRouter>
                  <Homepage/>
              </BrowserRouter>
              </MuiThemeProvider>
          </div>
    );
  }
}

export default App;

