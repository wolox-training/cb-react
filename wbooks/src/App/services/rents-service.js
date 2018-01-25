import api from '../config/api';
import endpoints from '../constants/endpoints';

export default {
  getRents(id) {
    return api.get(endpoints.rents.replace('id', id)).then(response => response.data);
  }
};
