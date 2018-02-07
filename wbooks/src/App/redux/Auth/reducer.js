import { AUTH_OK, AUTH_ERROR, LOGOUT } from './actions';

const initialState = { isLoggedIn: false, errorMsg: '' };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_OK:
      return {
        ...state,
        isLoggedIn: true,
        errorMsg: ''
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default auth;
