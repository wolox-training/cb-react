import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './styles.css';

export default class DropDownMenu extends Component {
  render() {
    return (
      <div className="dropdown-menu">
        {this.props.items.map(item => (
          <MenuItem component={item.component} action={item.action} key={item.id} />
        ))}
      </div>
    );
  }
}
