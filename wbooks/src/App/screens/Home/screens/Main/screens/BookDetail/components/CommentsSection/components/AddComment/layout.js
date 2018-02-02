import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { isEmpty } from '../../../../../../../../../../utils/formValidator';

import './styles.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <textarea {...input} placeholder={label} type={type} />
    {touched && error && <span className="error-msg">{error}</span>}
  </div>
);

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
};

const Layout = props => (
  <form className="comment-element" onSubmit={props.handleSubmit}>
    <label className="section-subtitle" htmlFor="comment-body">
      Agregar comentario
    </label>
    <Field name="comment-body" type="text" component={renderField} validate={[isEmpty]} />
    <button className="green-background" type="submit">
      Enviar
    </button>
  </form>
);

Layout.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'addComment'
})(Layout);
