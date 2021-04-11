import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './style/normal.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
require('./config/index')
require('./utils/mock')


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
