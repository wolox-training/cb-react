import React from 'react';
import Controls from './controls/Controls';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
    <header className="navBar">
      <div className="logo"></div>
      <Controls />
    </header>
  );
  }
}

export default NavBar;
