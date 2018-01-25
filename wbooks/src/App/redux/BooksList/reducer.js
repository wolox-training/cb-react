const booksList = (state = { books: [], isLoading: true, error: false }, action) => {
  switch (action.type) {
    case 'ADD_BOOKS':
      return {
        ...state,
        books: action.books,
        isLoading: false
      };
    case 'BOOKS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default booksList;
