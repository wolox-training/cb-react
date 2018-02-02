import { createStore, combineReducers } from 'redux';

import booksList from './BooksList/reducer';
import filter from './Filter/reducer';

const reducers = combineReducers({ booksList, filter });
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line
export default createStore(reducers, devTools);
