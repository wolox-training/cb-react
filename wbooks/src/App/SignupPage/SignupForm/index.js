import React, { Component } from 'react';
import { Auth } from '../../services/auth-service';
import { stringValidator } from '../../constants/stringValidator';
import './styles.css';

export default class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      pass: '',
      confirmation: '',
      error: false,
      errorMsg: ''
    }
  }

  resetErrorState = () => {
    this.setState({
      error: false,
      errorMsg: ''
    })
  }

  handleNameChange = (e) => {
    this.resetErrorState();
    this.setState({
      name: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.resetErrorState();
    this.setState({
      lastName: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.resetErrorState();
    this.setState({
      email: e.target.value
    })
  }

  handlePassChange = (e) => {
    this.resetErrorState();
    this.setState({
      pass: e.target.value
    })
  }

  handleConfirmPassChange = (e) => {
    this.resetErrorState();
    this.setState({
      confirmation: e.target.value
    })
  }

  isAnyFieldEmpty = () => {
    if (this.state.name === '' || this.state.lastName === ''
          || this.state.email === '' || this.state.pass === ''
          || this.state.confirmation === '') {
      this.setState({
        error: true,
        errorMsg: 'Todos los campos son requeridos'
      });
      return true
    }
    return false
  }

  invalidName = () => {
    if(stringValidator.matchNumber(this.state.name)){
      this.setState({
        error: true,
        errorMsg: 'El nombre no puede contener números'
      });
      return true;
    }
    return false
  }
  invalidLastName = () => {
    if(stringValidator.matchNumber(this.state.lastName)){
      this.setState({
        error: true,
        errorMsg: 'El apellido no puede contener números'
      })
      return true
    }
    return false
  }

  invalidPass = () => {
    if(this.state.pass.length < 8 || this.state.pass.length > 52){
      this.setState({
        error: true,
        errorMsg: 'La password debe contener '+(this.state.pass.length < 8 ? 'al menos 8' : 'menos de 52')+' caracteres'
      });
      return true
    }
    if(stringValidator.noNumberOrLetter(this.state.pass)) {
      this.setState({
        error: true,
        errorMsg: 'La password debe contener al menos un número y una letra'
      });
      return true;
    }
    return false
  }

  invalidConfirmPass = () => {
    if(this.state.pass !== this.state.confirmation){
      this.setState({
        error: true,
        errorMsg: 'La password y su confirmación deben coincidir'
      });
      return true
    }
    return false
  }

  validateSubmit = () => {
    if(this.isAnyFieldEmpty() || this.invalidName()
        || this.invalidLastName() || this.invalidPass()
        || this.invalidConfirmPass()) {
      return false
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.resetErrorState();
    if(this.validateSubmit()) {
      this.resetErrorState();
      Auth.signup(this.state.name, this.state.lastName, this.state.email,
                  this.state.pass, this.state.confirmation)
      .then((response) => {
        if(response.status === 201) {
          this.props.onRedirect();
        } else {
          this.setState({
            error: true,
            errorMsg: response.error
          })
        }
      });
    }
  }

  render() {
    return(
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input
          className="signup-input"
          type="text"
          placeholder="nombre"
          onChange={this.handleNameChange} >
        </input>
        <input
          className="signup-input"
          type="text"
          placeholder="apellido"
          onChange={this.handleLastNameChange} >
        </input>
        <input
          className="signup-input"
          type="email"
          placeholder="email"
          onChange={this.handleEmailChange} >
        </input>
        <input
          className="signup-input"
          type="password"
          placeholder="password"
          onChange={this.handlePassChange} >
        </input>
        <input
          className="signup-input"
          type="password"
          placeholder="confirm password"
          onChange={this.handleConfirmPassChange} >
        </input>
        <button className="green-background" disabled={this.state.error} >Sign up</button>
        {this.state.error && <span className="error-msg">{this.state.errorMsg}</span>}
      </form>
    );
  }
}
