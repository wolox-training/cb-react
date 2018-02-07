import api from '../config/api';

const endpoints = {
  rents: id => `/books/${id}/rents`,
  wishList: id => `/users/${id}/wishes`
};

export default {
  getRents(id) {
    return api.get(endpoints.rents(id)).then(response => response.data);
  },
  getWishList(id) {
    return api.get(endpoints.wishList(id)).then(response => response.data);
  },
  wish(book, user) {
    return api.post(endpoints.wishList(user), { wish: { book_id: book, user_id: user } });
  }
};
