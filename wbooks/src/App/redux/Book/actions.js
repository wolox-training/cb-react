import BooksService from '../../services/books-service';
import RentsService from '../../services/rents-service';

export const setBookInfoLoading = () => ({ type: 'SET_BOOK_INFO_LOADING' });
export const setFetchingWishlist = () => ({ type: 'SET_IS_FETCHING_WISHLIST' });
export const error = () => ({ type: 'BOOK_ERROR' });
export const addBook = info => ({ type: 'ADD_BOOK', payload: info });
export const addRents = rents => ({ type: 'ADD_RENTS', payload: rents });
export const addWishlist = wishlist => ({ type: 'ADD_WISHLIST', payload: wishlist });
export const finishedFetching = () => ({ type: 'FINISHED_FETCHING' });
export function bookFetch(id) {
  return dispatch => {
    BooksService.getBook(id).then(
      info => {
        dispatch(addBook(info));
      },
      () => dispatch(error())
    );
  };
}
export function getRentsAndWishlist(bookId, userId) {
  return dispatch => {
    Promise.all([RentsService.getRents(bookId), RentsService.getWishList(userId)]).then(
      ([rents, wishlist]) => {
        dispatch(addRents(rents));
        dispatch(addWishlist(wishlist));
        dispatch(finishedFetching());
      },
      () => dispatch(error())
    );
  };
}
export function wishBook(book, user) {
  return dispatch => {
    RentsService.wish(book, user).then(() =>
      RentsService.getWishList(user).then(
        wishlist => dispatch(addWishlist(wishlist)),
        () => dispatch(error())
      )
    );
  };
}
