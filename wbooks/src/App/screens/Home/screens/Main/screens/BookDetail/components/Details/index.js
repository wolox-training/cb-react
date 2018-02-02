import { connect } from 'react-redux';
import moment from 'moment';

import {
  getRentsAndWishlist,
  wishBook,
  finishedFetchingRents,
  isLoading
} from '../../../../../../../../redux/Book/actions';

import Layout from './layout';

const isRented = rents => {
  const now = Number(moment().format('YYYYMMDD'));
  return (
    rents.some(
      rent => Number(rent.from.replace(/-/g, '')) <= now && now <= Number(rent.to.replace(/-/g, ''))
    ) || rents.some(rent => !rent.returned_at)
  );
};

const isAlreadyWished = (wishlist, bookId) => wishlist.some(wish => wish.book.id === bookId);

const mapStateToProps = state => ({
  isLoading: state.book.isLoading,
  book: state.book.info,
  rents: state.book.rents,
  isAvailable: !isRented(state.book.rents),
  isWished: isAlreadyWished(state.user.wishlist, state.book.info.id),
  isFetchingRents: state.book.isFetchingRents,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  onMount: (bookId, userId) => {
    dispatch(isLoading());
    dispatch(getRentsAndWishlist(bookId, userId));
    dispatch(finishedFetchingRents());
  },
  wishBook: (bookId, userId) => {
    dispatch(wishBook(bookId, userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
