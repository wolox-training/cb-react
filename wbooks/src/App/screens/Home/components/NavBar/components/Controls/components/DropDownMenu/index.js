import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../MenuItem';
import './styles.css';

export default class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleMenu: false
    };
  }

  toogleMenu = () => {
    this.setState({
      toogleMenu: !this.state.toogleMenu
    });
  };

  render() {
    return (
      <div className={this.props.className} onClick={this.toogleMenu}>
        {this.state.toogleMenu && (
          <div className="dropdown-menu">
            {this.props.items.map(item => (
              <MenuItem component={item.component} action={item.action} key={item.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

DropDownMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
};
