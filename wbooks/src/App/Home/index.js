import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import { Auth } from '../Auth/authentication';

class Home extends React.Component {
  render() {
    if(!Auth.isLoggedIn()) {
      return <Redirect to="/login" />
    }
    return(
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default Home;
