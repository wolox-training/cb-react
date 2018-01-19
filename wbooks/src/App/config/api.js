import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  headers: { Authorization: localStorage.getItem('token') }
});
