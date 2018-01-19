import React, { Component } from 'react';
import './styles.css';

export default class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleMenu: false,
    }
  }

  handleClick = () => {
    if(this.props.isMenu){
      this.setState({
        toogleMenu: !this.state.toogleMenu
      })
    }
  }

  render() {
    return (
        <div className="user-avatar" onClick={this.handleClick}>
          {(this.props.isMenu && this.state.toogleMenu) && this.props.children}
        </div>
    )
  }
}
