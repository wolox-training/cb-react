const book = (state = { info: {}, rents: [], isLoading: true, error: false }, action) => {
  switch (action.type) {
    case 'ISLOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_BOOK':
      return {
        ...state,
        info: action.info,
        isLoading: false
      };
    case 'GET_RENTS':
      return {
        ...state,
        rents: action.rents,
        isLoading: false
      };
    case 'BOOK_ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default book;
