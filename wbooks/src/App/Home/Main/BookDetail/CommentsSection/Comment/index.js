import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserAvatar from '../../../../UserAvatar';
import './styles.css';

class Comment extends React.Component {
  render() {
     return (
       <div className="comment-area" >
         <UserAvatar component={<Redirect to="/profile"/>} isRedirect />
         <div className="comment-element">
          <h2 className="section-subtitle">{this.props.user}</h2>
          <h3>{this.props.date}</h3>
          <p className="comment">{this.props.message}</p>
         </div>
       </div>
     );
  }
}

Comment.propTypes = {
  user: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string
};

export default Comment;
