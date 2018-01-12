import React from 'react';
import './styles.css';

class Comment extends React.Component {
  render() {
     return (

       <div className="comment-area" >
         <div className="user-control" ></div>
         <div className="comment-element">
          <h2 className="section-subtitle">{this.props.user}</h2>
          <h3>{this.props.date}</h3>
          <p className="comment">{this.props.message}</p>
         </div>
       </div>
     );
  }
}

export default Comment;
