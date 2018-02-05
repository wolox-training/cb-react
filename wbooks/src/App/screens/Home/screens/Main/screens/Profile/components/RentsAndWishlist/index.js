import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Books from '../../../Dashboard/components/BooksList/components/Books';

import './styles.css';

export default class RentsAndWishlist extends Component {
  render() {
    return (
      <div className="section mid">
        {!!this.props.rents.length && (
          <div>
            <span className="section-title">Leidos</span>
            <Books books={this.props.rents.map(rent => rent.book)} />
          </div>
        )}
        {!!this.props.wishlist && (
          <div>
            <span className="section-title">Wishlist</span>
            <Books books={this.props.wishlist.map(wish => wish.book)} />
          </div>
        )}
      </div>
    );
  }
}

RentsAndWishlist.propTypes = {
  rents: PropTypes.arrayOf(PropTypes.object),
  wishlist: PropTypes.arrayOf(PropTypes.object)
};
