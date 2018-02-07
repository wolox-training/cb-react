import React from 'react';
import PropTypes from 'prop-types';

import AddComment from './components/AddComment';
import Comment from './components/Comment';
import './styles.css';

class CommentsSection extends React.Component {
  componentDidMount() {
    this.props.getBookComments(this.props.bookId);
  }
  render() {
    return (
      <div className="section">
        <h2 className="section-title">Comentarios</h2>
        <AddComment />
        {this.props.comments.map(comment => (
          <Comment
            key={comment.id}
            userName={comment.user.first_name}
            userId={comment.user.id}
            date={new Date(comment.created_at).toLocaleDateString('es-AR')}
            message={comment.content}
          />
        ))}
      </div>
    );
  }
}

CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  bookId: PropTypes.number,
  getBookComments: PropTypes.func
};

export default CommentsSection;
