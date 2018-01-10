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
      let cover = (book.image_url ? <img className="book-cover" src={book.image_url} alt="" /> : <div className="book-cover no-cover"></div>);
      return(
        // <div className="book-cover"></div>
        <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
          {cover}
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
        </Link>
      );
    });

    return <div className="book-list">{list}</div>;
  }
}

export default BookList;
