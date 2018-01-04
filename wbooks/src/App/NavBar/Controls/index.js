import React from 'react';
import './styles.css';

class Controls extends React.Component {
  render() {
    return(
      <div className="controls">
        <div className="notifications"></div>
        <div className="add-button"></div>
        <div className="user-control"></div>
      </div>
    )
  }
}

export default Controls
