import api from '../config/api';

const endpoints = {
  rents: '/books/id/rents',
  wishList: '/users/id/wishes'
};

export default {
  getRents(id) {
    return api.get(endpoints.rents.replace('id', id)).then(response => response.data);
  },
  getWishList(id) {
    return api.get(endpoints.wishList.replace('id', id)).then(response => response.data);
  },
  wish(book, user) {
    return api.post(endpoints.wishList.replace('id', user), { wish: { book_id: book, user_id: user } });
  }
};
