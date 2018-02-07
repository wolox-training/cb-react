import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../../../redux/Auth/actions';
import { getId } from '../../../../redux/User/actions';

import Layout from './layout';
import './styles.css';

class LoginForm extends Component {
  render() {
    return <Layout onSubmit={this.props.onSubmit} errorMsg={this.props.errorMsg} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  error: state.auth.error,
  errorMsg: state.auth.errorMsg
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    dispatch(login(values));
    dispatch(getId());
  }
});

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  errorMsg: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
