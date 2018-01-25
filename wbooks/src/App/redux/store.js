import { createStore, combineReducers } from 'redux';

import booksList from './BooksList/reducer';
import filter from './Filter/reducer';
import book from './Book/reducer';

const reducers = combineReducers({ booksList, filter, book });
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line
export default createStore(reducers, devTools);
