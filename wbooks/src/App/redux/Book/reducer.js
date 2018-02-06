import { ADD_BOOK, BOOK_ERROR, ADD_RENTS, FINISHED_FETCHING } from './actions';

const initialState = {
  info: {},
  rents: [],
  isLoading: true,
  isAvailable: false,
  isWished: false,
  error: false,
  isFetching: true
};

const book = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        info: action.payload,
        isLoading: false
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_RENTS:
      return {
        ...state,
        rents: action.payload
      };
    case FINISHED_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default book;
