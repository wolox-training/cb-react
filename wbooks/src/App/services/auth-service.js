import { api } from '../config/api';
import { endpoints } from '../constants/endpoints';

export const Auth = {
  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  },
  login(user, pass) {
    return api.post(endpoints.login, {
        email: user,
        password: pass
    })
    .then((response) => {
      localStorage.setItem('token',response.data.access_token);
      api.defaults.headers.common['Authorization'] = response.data.access_token;
      return (response)
    })
    .catch((error) => error.response.data);
  },
  logout() {
    localStorage.removeItem('token');
  },
  signup(name, lastName, email, pass, confirmation) {
    return api.post(endpoints.signup, {
      user: {
        email: email,
        password: pass,
        confirm_password: confirmation,
        first_name: name,
        last_name: lastName,
        locale: 'en'
      }
    }).then((response) => {
      console.log(response);
      localStorage.setItem('token',response.data.access_token);
      return response;
    }).catch((error) => {
      console.log(error.response);
      return error.response.data;
    })
  }
}
