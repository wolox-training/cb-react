import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const books = require("./books.json");

ReactDOM.render((
  <BrowserRouter>
    <App books={books} />
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
