import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Homepage from './components/Homepage'
import ErrorBoundary from './components/ErrorBoundaryPage';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#FFD639',
    },
});

class App extends Component {
  render() {
    return (
          <div>
              <ErrorBoundary>
              <MuiThemeProvider muiTheme={muiTheme}>
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

