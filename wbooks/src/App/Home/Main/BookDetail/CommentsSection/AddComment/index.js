import React from 'react';
import './styles.css';

class AddComment extends React.Component {
  render() {
    return (
      <div className="comment-area" >
        <div className="user-control" ></div>
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
