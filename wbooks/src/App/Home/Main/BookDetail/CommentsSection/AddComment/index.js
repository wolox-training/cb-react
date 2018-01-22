import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class AddComment extends React.Component {
  render() {
    return (
      <div className="comment-area">
        <Link to="/profile" className="user-avatar" />
        <form className="comment-element">
          <label className="section-subtitle" htmlFor="comment-body">
            Agregar comentario
          </label>
          <textarea id="comment-body" />
          <button className="green-background">Enviar</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
