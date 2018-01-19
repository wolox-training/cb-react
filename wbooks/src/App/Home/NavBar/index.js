import React from 'react';
import { Link } from 'react-router-dom';
import Controls from './Controls';
import './styles.css';

class NavBar extends React.Component {
  render() {
    return (
      <header className="navBar">
        <Link to="/" className="logo" />
        <Controls />
      </header>
    );
  }
}

export default NavBar;
