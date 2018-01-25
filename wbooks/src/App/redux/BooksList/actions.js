export const addBooks = books => ({
  type: 'ADD_BOOKS',
  books
});

export const booksError = () => ({
  type: 'BOOKS_ERROR'
});
