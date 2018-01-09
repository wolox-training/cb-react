import React from 'react';
import './styles.css';

class Controls extends React.Component {
  render() {
    return(
      <div className="controls">
        <div className="notifications control"></div>
        <div className="add-button control"></div>
        <div className="user-control"></div>
      </div>
    )
  }
}

export default Controls
