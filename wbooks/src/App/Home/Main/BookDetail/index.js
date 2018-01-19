import React from 'react';
import { Link } from 'react-router-dom';

import * as propTypes from '../../../constants/propTypes';

import Details from './Details';
import Recommendations from './Recommendations';
import CommentsSection from './CommentsSection';

import './styles.css';

const books = require('../../../../books.json');

class BookDetail extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" className="back-link">
          Volver
        </Link>
        <Details book={books.find(book => book.id === Number(this.props.match.params.id))} />
        <Recommendations books={books} />
        <CommentsSection />
      </div>
    );
  }
}

BookDetail.propTypes = propTypes.booksPropTypes;

export default BookDetail;
