import { book as initialState } from '../../constants/initialStates';

const book = (state = initialState, action) => {
  switch (action.type) {
    case 'ISLOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'ADD_BOOK':
      return {
        ...state,
        info: action.payload,
        isLoading: false
      };
    case 'BOOK_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case 'ADD_RENTS':
      return {
        ...state,
        rents: action.payload,
        isLoading: false
      };
    case 'IS_AVAILABLE':
      return {
        ...state,
        isAvailable: action.payload,
        isLoading: false
      };
    case 'FINISHED_FETCHING_RENTS':
      return {
        ...state,
        isFetchingRents: false,
        isLoading: false
      };
    default:
      return state;
  }
};

export default book;
