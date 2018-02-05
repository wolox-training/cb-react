import api from '../config/api';

const endpoints = {
  books: '/books'
};

export default {
  getBooks() {
    return api.get(endpoints.books).then(response => response.data);
  },
  getBook(id) {
    return api.get(`${endpoints.books}/${id}`).then(response => response.data);
  }
};
