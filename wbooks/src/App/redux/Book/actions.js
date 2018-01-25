export const getBook = info => ({ type: 'GET_BOOK', info });
export const getRents = rents => ({ type: 'GET_RENTS', rents });
export const isLoading = () => ({ type: 'ISLOADING' });
export const error = () => ({ type: 'BOOK_ERROR' });
