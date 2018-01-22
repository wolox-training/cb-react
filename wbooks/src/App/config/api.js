import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
});

instance.defaults.headers.common.Authorization = localStorage.getItem('token');

export default instance;
