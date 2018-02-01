import BooksService from '../../services/books-service';
import RentsService from '../../services/rents-service';

export const isLoading = () => ({ type: 'ISLOADING' });
export const error = () => ({ type: 'BOOK_ERROR' });
export const addBook = info => ({ type: 'ADD_BOOK', payload: info });
export const addRents = rents => ({ type: 'ADD_RENTS', payload: rents });
export const addWishlist = wishlist => ({ type: 'ADD_WISHLIST', payload: wishlist });
export const finishedFetchingRents = () => ({ type: 'FINISHED_FETCHING_RENTS' });
export function bookFetch(id) {
  return dispatch =>
    BooksService.getBook(id).then(
      info => {
        dispatch(addBook(info));
      },
      () => {
        dispatch(error());
      }
    );
}
export function getRentsAndWishlist(bookId, userId) {
  return dispatch => {
    RentsService.getRents(bookId).then(rents => dispatch(addRents(rents)), () => dispatch(error()));
    RentsService.getWishList(userId).then(
      wishlist => dispatch(addWishlist(wishlist)),
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
