import React from 'react';
import { Redirect } from 'react-router-dom';
import UserAvatar from '../../../../UserAvatar';
import './styles.css';

class AddComment extends React.Component {
  render() {
    return (
      <div className="comment-area" >
        <UserAvatar component={<Redirect to="/profile"/>} isRedirect />
        <form className="comment-element">
          <label className="section-subtitle">Agregar comentario</label>
          <textarea ></textarea>
          <button className="green-background">Enviar</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
