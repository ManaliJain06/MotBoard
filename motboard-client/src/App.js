import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './components/Homepage'
import ErrorBoundary from './components/ErrorBoundaryPage';

class App extends Component {
  render() {
    return (
          <div>
              <ErrorBoundary>
              <MuiThemeProvider>
              <BrowserRouter>
                  <Homepage/>
              </BrowserRouter>
              </MuiThemeProvider>
              </ErrorBoundary>
          </div>
    );
  }
}

export default App;

