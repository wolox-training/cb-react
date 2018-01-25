import React from 'react';

import BookCover from '../../../../components/BookCover';
import * as propTypes from '../../../../../../../../constants/propTypes';
import './styles.css';

class Details extends React.Component {
  render() {
    return (
      <div className="section book-details">
        <BookCover url={this.props.book.image_url} />
        <div className="book-info">
          <h3 className="details-title">{this.props.book.title}</h3>
          <h4 className="details-subtitle">{this.props.book.author}</h4>
          <h4 className="details-subtitle">{this.props.book.year}</h4>
          <h4 className="details-subtitle">Temática</h4>
          <p className="book-review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="blue-background">Aplicar</button>
        </div>
      </div>
    );
  }
}

Details.propTypes = propTypes.bookPropTypes;

export default Details;
