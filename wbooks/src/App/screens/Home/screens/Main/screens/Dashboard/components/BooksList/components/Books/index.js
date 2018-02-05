import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookCover from '../../../../../../components/BookCover';

const Books = props => (
  <div className="book-list">
    {props.books.map(book => (
      <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
        <BookCover url={book.image_url} />
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </Link>
    ))}
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
};

export default Books;
