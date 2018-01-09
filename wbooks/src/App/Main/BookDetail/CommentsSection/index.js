import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
import './styles.css';

class CommentsSection extends React.Component {
  render() {
    return(
      <div className="section" >
        <h2 className="section-title">Comentarios</h2>
        <AddComment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default CommentsSection;
