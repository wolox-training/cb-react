import React from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';

class Controls extends React.Component {
  logout = () => {
    return <Redirect to="/" />
  }

  render() {
    return(
      <div className="controls">
        <div className="notifications control"></div>
        <div className="add-button control"></div>
        <div className="user-control" onClick={this.props.logout}></div>
      </div>
    )
  }
}

export default Controls
