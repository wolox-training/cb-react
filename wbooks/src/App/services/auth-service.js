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
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
  },
  logout() {
    localStorage.removeItem('token');
  }
}
