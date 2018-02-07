import Auth from '../../services/auth-service';

export const AUTH_OK = 'AUTH@@ AUTH_OK';
export const AUTH_ERROR = 'AUTH@@ AUTH_ERROR';
export const LOGOUT = 'AUTH@@ LOGOUT';

export const authOk = () => ({ type: AUTH_OK });
export const authError = message => ({ type: AUTH_ERROR, payload: message });
export function login(values) {
  return dispatch => {
    Auth.login(values.email, values.password).then(
      () => dispatch(authOk()),
      error => {
        dispatch(authError(error));
      }
    );
  };
}
export const logout = () => ({ type: LOGOUT });
