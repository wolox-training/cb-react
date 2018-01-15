import axios from 'axios';
import { API } from './api';

export const Auth = {
  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  },
  login(user, pass) {
    return axios.post(API.baseURL + API.endpoint,{
        email: user,
        password: pass
    })
    .then((response) => {
      localStorage.setItem('token',response.data.access_token);
      return (response)
    })
    .catch((error) => {
      return error.response.data;
    });
  },
  logout() {
    localStorage.removeItem('token');
  }
}
