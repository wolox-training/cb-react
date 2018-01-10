import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="wb_logo" src="../../assets/wbooks_logo.svg" alt=""></div>
        <button className="login-button red-background">INGRESAR CON GOOGLE</button>
      </div>
    );
  }
}

export default Login;
