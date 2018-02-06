import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment-area">
        <div to={`/profile/${this.props.userId}`} className="user-avatar" />
        <div className="comment-element">
          <h2 className="section-subtitle">{this.props.userName}</h2>
          <h3 className="comment-date">{this.props.date}</h3>
          <p className="comment">{this.props.message}</p>
        </div>
        {this.props.book && (
          <Link to={`/books/${this.props.book.id}`} className="book-link">
            {this.props.book.title}
          </Link>
        )}
      </div>
    );
  }
}

Comment.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })
};

export default Comment;
