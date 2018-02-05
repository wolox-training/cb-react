import api from '../config/api';

const endpoints = {
  userInfo: '/users/me',
  comments: '/books/id/comments',
  userRents: '/users/id/rents',
  wishList: '/users/id/wishes',
  userComments: '/users/id/comments'
};

export default {
  getId() {
    return api.get(endpoints.userInfo).then(response => response.data.id);
  },
  getInfo() {
    return api.get(endpoints.userInfo).then(response => response.data);
  },
  getRents(id) {
    return api.get(endpoints.userRents.replace('id', id)).then(response => response.data);
  },
  getWishList(id) {
    return api.get(endpoints.wishList.replace('id', id)).then(response => response.data);
  },
  getComments(id) {
    return api.get(endpoints.userComments.replace('id', id)).then(response => response.data);
  }
};
