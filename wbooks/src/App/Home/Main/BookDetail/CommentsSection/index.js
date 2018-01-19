import React from 'react';

import AddComment from './AddComment';
import Comment from './Comment';
import './styles.css';

class CommentsSection extends React.Component {
  render() {
    const comments = require('./comments.json').map(comment => (
      <Comment key={comment.user} user={comment.user} date={comment.date} message={comment.message} />
    ));
    return (
      <div className="section">
        <h2 className="section-title">Comentarios</h2>
        <AddComment />
        {comments}
      </div>
    );
  }
}

export default CommentsSection;
