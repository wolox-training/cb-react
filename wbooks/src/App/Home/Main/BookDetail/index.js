import React from 'react';
import { Link } from 'react-router-dom';

import { booksPropTypes } from '../../../constants/propTypes';
import BookService from '../../../services/books-service';

import Details from './Details';
import Recommendations from './Recommendations';
import CommentsSection from './CommentsSection';

import './styles.css';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      book: {}
    };
  }
  componentDidMount() {
    BookService.getBook(this.props.match.params.id).then(book => {
      this.setState({
        loading: false,
        book
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <span>Cargando...</span>;
    }
    return (
      <div>
        <Link to="/" className="back-link">
          Volver
        </Link>
        <Details book={this.state.book} />
        <Recommendations />
        <CommentsSection />
      </div>
    );
  }
}

BookDetail.propTypes = booksPropTypes;

export default BookDetail;
