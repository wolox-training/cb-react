import React from 'react';

import BookCover from '../../../../components/BookCover';
import * as propTypes from '../../../../../../../../constants/propTypes';
import './styles.css';

class Details extends React.Component {
  componentDidMount() {
    this.props.onMount(this.props.book.id, this.props.userId);
  }

  wishBook = () => {
    this.props.wishBook(this.props.book.id, this.props.userId);
  };

  render() {
    if (this.props.isLoading) {
      return <span>Cargando...</span>;
    }
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
          {this.props.isFetching ? (
            <span>loading...</span>
          ) : this.props.isAvailable ? (
            <button className="blue-background">Alquilar</button>
          ) : !this.props.isWished ? (
            <button className="green-background" onClick={this.wishBook}>
              Wishlist
            </button>
          ) : (
            <button className="blue-background" disabled>
              Alquilar
            </button>
          )}
        </div>
      </div>
    );
  }
}

Details.propTypes = propTypes.bookPropTypes;

export default Details;
