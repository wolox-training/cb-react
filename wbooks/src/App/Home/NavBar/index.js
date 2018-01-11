import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Controls from './Controls';
import './styles.css';

class NavBar extends React.Component {
  login = () => {
    console.log('login');
    //TODO this should be render or changed to a link
    return <Redirect to="/login" />
  }

  render() {

    return (
    <header className="navBar">
      <Link to='/' className="logo"></Link>
      <Controls />
    </header>
  );
  }
}

export default NavBar;
