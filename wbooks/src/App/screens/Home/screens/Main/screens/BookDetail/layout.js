import React from 'react';
import { Link } from 'react-router-dom';

import { booksPropTypes } from '../../../../../../constants/propTypes';
import BookService from '../../../../../../services/books-service';
import RentsService from '../../../../../../services/rents-service';

import Details from './components/Details';
import Recommendations from './components/Recommendations';
import CommentsSection from './components/CommentsSection';

import './styles.css';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      book: {}
    };
  }
  componentDidMount() {
    RentsService.getRents(this.props.match.params.id).then(response => {
      console.log(response);
    });
    BookService.getBook(this.props.match.params.id).then(
      book => {
        this.setState({
          loading: false,
          book
        });
      },
      () => {
        this.setState({
          loading: false,
          error: true
        });
      }
    );
  }

  render() {
    if (this.state.error) {
      return <span>ERROR</span>;
    }
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
