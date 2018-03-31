//var React = require('react'); -> ES5 standard
import React from 'react'; //-> Es6 standard
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
