import { auth as initialState } from '../../constants/initialStates';

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_OK':
      return {
        ...state,
        isLoggedIn: true,
        errorMsg: ''
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        errorMsg: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default auth;
