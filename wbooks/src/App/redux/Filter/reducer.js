import { SET_FILTER } from './actions';

const initialState = { selection: '', text: '' };

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
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
