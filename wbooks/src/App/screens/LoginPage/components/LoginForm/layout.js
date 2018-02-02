import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { required, email, passMinLength, passMaxLength } from '../../../../utils/formValidator';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input {...input} placeholder={label} type={type} className="login-input" />
    {touched &&
      ((error && <span className="error-msg">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

renderField.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

const LoginForm = props => (
  <form className="login-form" onSubmit={props.handleSubmit}>
    <Field name="email" label="email" component={renderField} validate={[required, email]} />
    <Field
      name="password"
      type="password"
      label="password"
      component={renderField}
      validate={[required, passMaxLength, passMinLength]}
    />
    <button className="login-button blue-background" type="submit">
      LOGIN
    </button>
    {props.errorMsg !== '' && <span className="error-msg">{props.errorMsg}</span>}
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  errorMsg: PropTypes.string
};

export default reduxForm({
  form: 'login'
})(LoginForm);
