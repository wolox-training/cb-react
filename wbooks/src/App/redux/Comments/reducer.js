import { comments as initialState } from '../../constants/initialStates';

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENTS':
      return {
        ...state,
        commentsList: action.payload
      };
    default:
      return state;
  }
};

export default comments;
