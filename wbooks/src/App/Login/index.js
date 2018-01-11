import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import './styles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login : false,
    }
  }

  handleLogin = () => {
    this.setState({
      login : true
    });
  };

  render() {
    if(this.props.isLoggedIn()) {
      return <Redirect to="/" />
    } else if(this.state.login) {
      return (<LoginForm />);
    }
    return (
      <div className="login">
        <div className="wb_logo" ></div>
        <button
          className="login-button red-background"
          type="button"
          onClick={this.handleLogin}
          >INGRESAR CON GOOGLE
        </button>
      </div>
    );
  }
}

export default Login;
