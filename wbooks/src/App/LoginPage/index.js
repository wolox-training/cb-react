import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Auth from '../services/auth-service';

import LoginForm from './LoginForm';
import './styles.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect || Auth.isLoggedIn()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page">
        <div className="wb-logo" />
        <LoginForm onRedirect={this.handleRedirect} />
        <Link className="signup-link" to="/signup">
          Sign up
        </Link>
      </div>
    );
  }
}
