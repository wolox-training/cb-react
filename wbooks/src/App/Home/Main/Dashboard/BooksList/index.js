import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Request } from '../../../../services/books-service';
import BookCover from '../../BookCover';
import './styles.css';

class BookList extends React.Component {
  state = {
    loading: true,
    books: []
  };

  componentDidMount() {
    Request.getBooks().then(books => {
      this.setState({
        loading: false,
        books
      });
    });
  }

  render() {
    let selectedBooks = this.state.books;
    if (this.props.filterSelection !== '' && this.props.filterText !== '') {
      selectedBooks = selectedBooks.filter(book =>
        book[this.props.filterSelection].toLowerCase().includes(this.props.filterText.toLowerCase())
      );
    }
    if (this.state.loading) {
      return <span>cargando...</span>;
    }
    return (
      <div className="book-list">
        {selectedBooks.map(book => (
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
  filterSelection: PropTypes.string,
  filterText: PropTypes.string
};

export default BookList;
