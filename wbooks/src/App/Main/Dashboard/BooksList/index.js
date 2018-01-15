import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookCover from '../../BookCover';
import './styles.css';

const books = require('../../../../books.json');

class BookList extends React.Component {

  render() {
    let selectedBooks = books;
    if(this.props.filterSelection !== '' && this.props.filterText !== '') {
      selectedBooks = selectedBooks.filter((book) => {
        return (book[this.props.filterSelection].toLowerCase().includes(this.props.filterText.toLowerCase()))
      });
    }

    return (
      <div className="book-list">
        {
          selectedBooks.map((book) => {
            return(
              <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
                <BookCover url={book.image_url} />
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
              </Link>
            );
          })
        }
      </div>
    )
  }
}

BookList.propTypes = {
  filterSelection: PropTypes.string,
  filterText: PropTypes.string
}

export default BookList;
