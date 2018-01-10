import React from 'react';
import Controls from './Controls';
import { Link } from 'react-router-dom';
import './styles.css';

class NavBar extends React.Component {
  render() {
    return (
    <header className="navBar">
      <Link to='/dashboard' className="logo"></Link>
      <Controls />
    </header>
  );
  }
}

export default NavBar;
