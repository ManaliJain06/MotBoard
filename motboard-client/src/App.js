import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Homepage from './components/Homepage';
class App extends Component {
  render() {
    return (
          <div>
              <BrowserRouter>
                  <Homepage/>
              </BrowserRouter>
          </div>
    );
  }
}

export default App;

