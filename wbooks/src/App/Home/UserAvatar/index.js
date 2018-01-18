import React, { Component } from 'react';
import './styles.css';

export default class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleMenu: false,
      redirect: false
    }
  }

  handleClick = () => {
    if(this.props.isMenu){
      this.setState({
        toogleMenu: !this.state.toogleMenu
      })
    } else if (this.props.isRedirect) {
      this.setState({
        redirect: !this.state.redirect
      })
    }
  }

  render() {
    return (
        <div className="user-avatar" onClick={this.handleClick}>
          {(this.props.isMenu && this.state.toogleMenu) && this.props.component}
          {(this.props.isRedirect && this.state.redirect) && this.props.component}
        </div>
    )
  }
}
