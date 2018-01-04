import React from 'react';
import Controls from './Controls';
import './styles.css';

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
