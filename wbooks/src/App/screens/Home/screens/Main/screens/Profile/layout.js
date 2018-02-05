import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserInfo from './components/UserInfo';
import Comments from './components/Comments';
import RentsAndWishlist from './components/RentsAndWishlist';

export default class Profile extends Component {
  componentDidMount() {
    this.props.handleMount(this.props.id);
  }
  render() {
    if (this.props.isLoading) {
      return <span>loading...</span>;
    }
    return (
      <div>
        <UserInfo info={this.props.info} />
        <RentsAndWishlist rents={this.props.rents} wishlist={this.props.wishlist} />
        <Comments comments={this.props.comments} />
      </div>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number,
  isLoading: PropTypes.bool,
  handleMount: PropTypes.func,
  info: PropTypes.shape({}),
  rents: PropTypes.arrayOf(PropTypes.object),
  wishlist: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object)
};
