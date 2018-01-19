import React, { Component, Fragment } from 'react';

export default class NotificationControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleMenu: false
    };
  }

  handleClick = () => {
    this.setState({
      toogleMenu: !this.state.toogleMenu
    });
  };

  render() {
    return (
      <Fragment>
        <div className="notifications control" onClick={this.handleClick}>
          {this.state.toogleMenu && this.props.children}
        </div>
      </Fragment>
    );
  }
}
