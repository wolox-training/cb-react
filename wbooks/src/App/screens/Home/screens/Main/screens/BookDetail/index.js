import { connect } from 'react-redux';

import BooksService from '../../../../../../services/books-service';
import RentsService from '../../../../../../services/rents-service';
import { getRents, getBook, isLoading, error } from '../../../../../../redux/Book/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  book: state.book.info,
  rents: state.book.rents,
  isLoading: state.book.isLoading,
  error: state.book.error
});

const mapDispatchToProps = dispatch => ({
  onMount: id => {
    dispatch(isLoading());
    BooksService.getBook(id).then(
      info => {
        dispatch(getBook(info));
      },
      () => {
        dispatch(error());
      }
    );
    RentsService.getRents(id).then(
      rents => {
        dispatch(getRents(rents));
      },
      () => {
        dispatch(error());
      }
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
