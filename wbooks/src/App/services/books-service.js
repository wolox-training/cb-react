import { api } from '../config/api';
import { endpoints } from '../constants/endpoints';

export const Request = {
  getBooks() {
    return api
      .get(endpoints.books)
      .then(response => response.data)
      .catch(error => error);
  },
  getBook(id) {
    return api
      .get(`${endpoints.books}/${id}`)
      .then(response => response.data)
      .catch(error => error);
  }
};
