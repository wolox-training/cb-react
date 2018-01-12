import React from 'react';
import UserAvatar from '../../UserAvatar';
import './styles.css';

class Controls extends React.Component {
  render() {
    return(
      <div className="controls">
        <div className="notifications control"></div>
        <div className="add-button control"></div>
        <UserAvatar />
      </div>
    )
  }
}

export default Controls
