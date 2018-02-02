import { connect } from 'react-redux';

import { bookFetch } from '../../../../../../redux/Book/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  isLoading: state.book.isLoading,
  error: state.book.error
});

const mapDispatchToProps = dispatch => ({
  onMount: id => {
    dispatch(bookFetch(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
