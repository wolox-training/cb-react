import React from 'react';
import './BookList.css';

function BookList(props) {

  const list = props.books.map((book) => {
    return(
      <div className="book-card">
        <div className="book-cover"></div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>
    );
  });

  return <div className="book-list">{list}</div>;

}

export default BookList;
