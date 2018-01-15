import React from 'react';
import UserAvatar from '../../UserAvatar';
import NotificationControl from './NotificationControl';
import AddBookControl from './AddBookControl';
import './styles.css';

class Controls extends React.Component {

  render() {
    return(
      <div className="controls">
        <NotificationControl />
        <AddBookControl />
        <UserAvatar />
      </div>
    )
  }
}

export default Controls
