import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Auth } from '../Auth/authentication';
import './styles.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect : false,
    }
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    if(this.state.redirect || Auth.isLoggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <div className="wb-logo" ></div>
        <LoginForm redirect={this.redirect} />
        <Link className="signup-link" to="/signup">Sign up</Link>
      </div>
    );
  }
}
