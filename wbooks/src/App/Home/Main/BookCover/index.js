import React from 'react';

const BookCover = props =>
  props.url ? <img className="book-cover" alt="" src={props.url} /> : <div className="book-cover no-cover" />;

export default BookCover;
