import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../../../BookDetail/components/CommentsSection/components/Comment';

export default class Comments extends Component {
  render() {
    return (
      <div className="section">
        <span className="section-title">Comentarios</span>
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

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};
