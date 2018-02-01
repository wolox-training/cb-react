export const auth = { isLoggedIn: false, errorMsg: '' };
export const book = {
  info: {},
  rents: [],
  isLoading: true,
  isAvailable: false,
  isWished: false,
  error: false,
  isFetchingRents: true
};
export const bookList = { books: [], isLoading: true, error: false };
export const user = { id: null, wishlist: [] };
export const filter = { selection: '', text: '' };
