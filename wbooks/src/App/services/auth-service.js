import api from '../config/api';
import endpoints from '../constants/endpoints';

const Auth = {
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  },
  login(user, pass) {
    return api
      .post(endpoints.login, {
        email: user,
        password: pass
      })
      .then(
        response => {
          localStorage.setItem('token', response.data.access_token);
          api.defaults.headers.common.Authorization = response.data.access_token;
          return response;
        },
        error => {
          throw error;
        }
      );
  },
  logout() {
    localStorage.removeItem('token');
  },
  signup(name, lastName, email, pass, confirmation) {
    return api
      .post(endpoints.signup, {
        user: {
          email,
          password: pass,
          confirm_password: confirmation,
          first_name: name,
          last_name: lastName,
          locale: 'en'
        }
      })
      .then(
        response => {
          localStorage.setItem('token', response.data.access_token);
          api.defaults.headers.common.Authorization = response.data.access_token;
          return response;
        },
        error => {
          throw error;
        }
      );
  }
};

export default Auth;
