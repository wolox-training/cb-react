import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postComment } from '../../../../../../../../../../redux/Comments/actions';

import Layout from './layout';

class AddCommentForm extends Component {
  handleSubmit = comment => {
    this.props.onSubmit(this.props.bookId, this.props.userId, comment['comment-body']);
  };
  render() {
    return (
      <div className="comment-area">
        <Link to={`/profile/${this.props.userId}`} className="user-avatar" />
        <Layout onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

AddCommentForm.propTypes = {
  onSubmit: PropTypes.func,
  bookId: PropTypes.number,
  userId: PropTypes.number
};

const mapStateToProps = state => ({
  bookId: state.book.info.id,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (book, user, comment) => dispatch(postComment(book, user, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
