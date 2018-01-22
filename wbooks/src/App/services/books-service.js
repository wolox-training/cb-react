import api from '../config/api';
import endpoints from '../constants/endpoints';

export default {
  getBooks() {
    return api.get(endpoints.books).then(
      response => response.data,
      error => {
        throw error;
      }
    );
  },
  getBook(id) {
    return api.get(`${endpoints.books}/${id}`).then(
      response => response.data,
      error => {
        throw error;
      }
    );
  }
};
