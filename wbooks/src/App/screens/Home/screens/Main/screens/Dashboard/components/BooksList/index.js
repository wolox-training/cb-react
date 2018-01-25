import { connect } from 'react-redux';

import BookService from '../../../../../../../../services/books-service';
import { addBooks, booksError } from '../../../../../../../../redux/BooksList/actions';

import Layout from './layout';

const filterBooks = (filter, books) => {
  if (filter.selection !== '' && filter.text !== '') {
    return books.filter(book => book[filter.selection].toLowerCase().includes(filter.text.toLowerCase()));
  }
  return books;
};

const mapStateToProps = state => ({
  books: filterBooks(state.filter, state.booksList.books),
  isLoading: state.booksList.isLoading,
  error: state.booksList.error
});

const mapDispatchToProps = dispatch => ({
  onLoadBooks: () => {
    BookService.getBooks().then(
      books => {
        dispatch(addBooks(books));
      },
      () => {
        dispatch(booksError());
      }
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
