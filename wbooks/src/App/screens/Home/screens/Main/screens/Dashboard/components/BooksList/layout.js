import React from 'react';
import PropTypes from 'prop-types';

import Books from './components/Books';

import './styles.css';

export default class BookList extends React.Component {
  componentDidMount() {
    this.props.onLoadBooks();
  }

  render() {
    if (this.props.error) {
      return <span>ERROR</span>;
    }
    if (this.props.isLoading) {
      return <span>cargando...</span>;
    }
    return <Books books={this.props.books} />;
  }
}

BookList.propTypes = {
  onLoadBooks: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.bool
};
