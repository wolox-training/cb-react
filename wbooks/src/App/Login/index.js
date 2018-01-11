import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

class Login extends Component {

  render() {
    console.log(this.props)
    if(this.props.isLoggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div className="login">
        <div className="wb_logo" ></div>
        <button
          className="login-button red-background"
          type="button"
          onClick={this.props.login}
          >INGRESAR CON GOOGLE
        </button>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default Login;
