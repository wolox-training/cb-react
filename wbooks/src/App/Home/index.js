import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../services/auth-service';

import NavBar from './NavBar';
import Main from './Main';

class Home extends React.Component {
  render() {
    if (!Auth.isLoggedIn()) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default Home;
