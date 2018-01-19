import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../../../../UserAvatar';
import './styles.css';

class AddComment extends React.Component {
  render() {
    return (
      <div className="comment-area">
        <Link to="/profile">
          <UserAvatar />
        </Link>
        <form className="comment-element">
          <label className="section-subtitle">Agregar comentario</label>
          <textarea />
          <button className="green-background">Enviar</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
