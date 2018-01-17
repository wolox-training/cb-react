import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Auth } from '../services/auth-service';
import './styles.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect : false,
    }
  }

  handleRedirect = () => {
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
        <div className="wb_logo" ></div>
        <LoginForm onRedirect={this.handleRedirect} />
        <Link className="signup-link" to="/signup">Sign up</Link>
      </div>
    );
  }
}
