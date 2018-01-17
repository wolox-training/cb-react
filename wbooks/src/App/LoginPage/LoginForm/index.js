import React, { Component, Fragment } from 'react';
import { Auth } from '../../services/auth-service';
import './styles.css';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formEnabled: false,
      email: '',
      pass: '',
      loading: false,
      error: false,
      errorMsg: ''
    }
  }

  validateSubmit = () => {
    if(this.state.email === '' || this.state.pass === '') {
      this.setState({
        loading: false,
        error: true,
        errorMsg: 'Both fields are required'
      })
      return false
    }
    if(this.state.pass.length < 8 || this.state.pass.length > 52) {
      this.setState({
        loading: false,
        error:true,
        errorMsg: 'The password is too '+(this.state.pass.length < 8 ? 'short' : 'long')
      })
      return false;
    }
    this.setState({
      loading: false,
      error: false
    })
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.formEnabled) {
      this.setState({
        formEnabled : true
      })
    } else {
      this.handleLogin()
    }
  }

  handleLogin = () => {
    this.setState({
      loading: true,
      error: false
    });
    if(this.validateSubmit()){
      Auth.login(this.state.email, this.state.pass)
      .then((response) => {
        if(response.statusText === "OK") {
          this.props.redirect();
        } else {
          this.setState({
            loading: false,
            error: true,
            errorMsg: response.error
          })
        }
      });
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      pass: e.target.value
    })
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit} >
        {( this.state.formEnabled &&
          <Fragment>
            <input
              className="login-input"
              type="email"
              placeholder="email"
              onChange={this.handleEmailChange}>
            </input>
            <input className="login-input"
              type="password"
              placeholder="password"
              onChange={this.handlePasswordChange}>
            </input>
          </Fragment>
        )}
        <button
          className="login-button blue-background"
          disabled={this.state.loading}
          type="submit"
        >LOGIN
        </button>
        {(this.state.error && <span className="error-msg">{this.state.errorMsg}</span>)}
      </form>
    );
  }
}
