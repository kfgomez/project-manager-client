import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import authReducer from './store/reducers/auth';
import projectsReducer from './store/reducers/projects';
import uiReducer from './store/reducers/ui';

import thunk from 'redux-thunk';

axios.defaults.baseURL="https://api.redcarats.com";

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    ui: uiReducer,
});

const logger = store =>{
    return next =>{
        return action=>{
            //console.log('[Middleware Dispatching]', action);
            const result = next(action);
            //console.log('[Middleware next state]', store.getState());
            return result;
        };
    };
};
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(rootReducer, componseEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
