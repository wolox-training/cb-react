import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from './SignupForm';
import './styles.css';

export default class SignupPage extends Component {
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
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup-page">
        <div className="wb-logo" />
        <SignupForm onRedirect={this.handleRedirect} />
      </div>
    );
  }
}
