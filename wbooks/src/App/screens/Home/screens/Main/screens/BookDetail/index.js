import { connect } from 'react-redux';

import { bookFetch, isLoading } from '../../../../../../redux/Book/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  isLoading: state.book.isLoading,
  error: state.book.error
});

const mapDispatchToProps = dispatch => ({
  onMount: id => {
    dispatch(isLoading());
    dispatch(bookFetch(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
