import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL="https://rc-projects-kev9504.c9users.io:8081"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
