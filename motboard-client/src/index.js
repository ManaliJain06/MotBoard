import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import ErrorBoundary from './components/ErrorBoundaryPage';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/components/Inter';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);


ReactDOM.render(
    <ErrorBoundary>
        <I18nextProvider i18n={ i18n }>
            <Provider store={store}>
                <App />
            </Provider>
        </I18nextProvider>
    </ErrorBoundary>
    ,document.getElementById('root')
);
registerServiceWorker();
