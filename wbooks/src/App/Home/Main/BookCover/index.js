import React from 'react';
import PropTypes from 'prop-types';

const BookCover = props =>
  props.url ? <img className="book-cover" alt="" src={props.url} /> : <div className="book-cover no-cover" />;

export default BookCover;

BookCover.propTypes = {
  url: PropTypes.string
};
