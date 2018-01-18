import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
    return(
      <div className="menu-item" onClick={this.props.action} >
        {this.props.component}
      </div>
    )
  }
}
