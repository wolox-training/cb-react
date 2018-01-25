import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookCover from '../../../../components/BookCover';

import './styles.css';

export default class BookList extends React.Component {
  componentDidMount() {
    this.props.onLoadBooks();
  }

  render() {
    if (this.props.error) {
      return <span>ERROR</span>;
    }
    // let selectedBooks = this.props.books;
    // if (this.props.filterSelection !== '' && this.props.filterText !== '') {
    //   selectedBooks = selectedBooks.filter(book =>
    //     book[this.props.filterSelection].toLowerCase().includes(this.props.filterText.toLowerCase())
    //   );
    // }
    if (this.props.isLoading) {
      return <span>cargando...</span>;
    }
    return (
      <div className="book-list">
        {this.props.books.map(book => (
          <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
            <BookCover url={book.image_url} />
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
          </Link>
        ))}
      </div>
    );
  }
}

BookList.propTypes = {
  // filterSelection: PropTypes.string,
  // filterText: PropTypes.string,
  onLoadBooks: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.bool
};
