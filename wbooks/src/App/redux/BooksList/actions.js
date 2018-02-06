export const ADD_BOOKS = 'BOOKLIST@@ ADD_BOOKS';
export const BOOKS_ERROR = 'BOOKLIST@@ BOOKS_ERROR';

export const addBooks = books => ({
  type: ADD_BOOKS,
  books
});

export const booksError = () => ({
  type: BOOKS_ERROR
});
