import axios from 'axios';
import { API } from './api';

export const Auth = {
  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  },
  login(user, pass) {
    return axios.post(API.baseURL + API.loginEndpoint,{
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
  },
  signup(name, lastName, email, pass, confirmation) {
    return axios.post(API.baseURL + API.signupEndpoint, {
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
