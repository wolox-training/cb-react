import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item" onClick={this.props.action} role="menuitem">
        {this.props.component}
      </div>
    );
  }
}

MenuItem.propTypes = {
  action: PropTypes.func,
  component: PropTypes.element
};
