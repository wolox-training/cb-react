import api from '../config/api';
import endpoints from '../constants/endpoints';

export default {
  getId() {
    return api.get(endpoints.userInfo).then(response => response.data.id);
  }
};
