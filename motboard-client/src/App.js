import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Homepage from './components/Homepage'
import { I18nextProvider } from 'react-i18next';
import i18n from './components/il8n';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#FFD639',
    },
});

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <BrowserRouter>
                        <I18nextProvider i18n={ i18n }>
                            <Homepage/>
                        </I18nextProvider>
                    </BrowserRouter>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;

