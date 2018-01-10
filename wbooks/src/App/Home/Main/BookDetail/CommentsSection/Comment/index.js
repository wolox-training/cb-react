import React from 'react';
import './styles.css';

class Comment extends React.Component {
  render() {
     return (
       <div className="comment-area" >
         <div className="user-control" ></div>
         <div className="comment-element">
          <h2 className="section-subtitle">User</h2>
          <h3>xx/xx/xxx</h3>
          <p className="comment">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
         </div>
       </div>
     );
  }
}

export default Comment;
