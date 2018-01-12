import React from 'react';
import PropTypes from 'prop-types';
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

    return (
      <div className="book-list">
        {
          selectedBooks.map((book) => {
            return(
              <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
                {
                  book.image_url ? 
                    <img className="book-cover" src={book.image_url} alt="" />
                    :
                    <div className="book-cover no-cover"></div>
                }
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
