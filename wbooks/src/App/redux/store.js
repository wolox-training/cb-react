import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import booksList from './BooksList/reducer';
import filter from './Filter/reducer';
import book from './Book/reducer';
import auth from './Auth/reducer';
import user from './User/reducer';

const reducers = combineReducers({ booksList, filter, book, auth, user, form: formReducer });
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line
export default createStore(reducers, devTools, applyMiddleware(thunk));
