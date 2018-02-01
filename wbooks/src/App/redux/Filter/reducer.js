import { filter as initialState } from '../../constants/initialStates';

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        selection: action.selection,
        text: action.text
      };
    default:
      return state;
  }
};

export default filter;
