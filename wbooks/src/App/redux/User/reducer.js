import { user as initialState } from '../../constants/initialStates';

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ID':
      return {
        ...state,
        id: action.payload
      };
    case 'ADD_WISHLIST':
      return {
        ...state,
        wishlist: action.payload
      };
    default:
      return state;
  }
};

export default user;
