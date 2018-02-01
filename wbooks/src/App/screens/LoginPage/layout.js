import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

// import Auth from '../../services/auth-service';

import LoginForm from './components/LoginForm';
import './styles.css';

class Layout extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page">
        <div className="wb-logo" />
        <LoginForm onSubmit={this.props.onSubmit} />
        <Link className="signup-link" to="/signup">
          Sign up
        </Link>
      </div>
    );
  }
}

Layout.propTypes = {
  onSubmit: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

export default Layout;
