import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Homepage from './components/Homepage'
import { I18nextProvider } from 'react-i18next';
import i18n from './il8n';


const muiTheme = getMuiTheme({
    palette: {

        primary1Color: '#ba68c8',
        pickerHeaderColor: '#d1c4e9',
        clockCircleColor: '#d1c4e9',
        primary2Color: '#d1c4e9',
    },
});

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <I18nextProvider i18n={ i18n }>
                        <BrowserRouter>
                            <Homepage/>
                        </BrowserRouter>
                    </I18nextProvider>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;

