import api from '../config/api';
import endpoints from '../constants/endpoints';

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
