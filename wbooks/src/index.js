import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const books = require("./books.json");

ReactDOM.render(
  <App books={books} />
  , document.getElementById('root'));
registerServiceWorker();
