import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class BookList extends React.Component {

  render() {
    let selectedBooks = this.props.books;
    if(this.props.filterSelection !== '' && this.props.filterText !== '') {
      selectedBooks = selectedBooks.filter((book) => {
        return (book[this.props.filterSelection].toLowerCase().includes(this.props.filterText.toLowerCase()))
      });
    }

    const list = selectedBooks.map((book) => {
      return(
        <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
          <div className="book-cover"></div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
        </Link>
      );
    });

    return <div className="book-list">{list}</div>;
  }
}

export default BookList;
