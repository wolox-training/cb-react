import api from '../config/api';

const endpoints = {
  comments: id => `/books/${id}/comments`
};

export default {
  getComments(id) {
    return api.get(endpoints.comments(id)).then(response => response.data);
  },
  postComment(bookId, userId, content) {
    return api.post(endpoints.comments(bookId), {
      comment: { book_id: bookId, user_id: userId, content }
    });
  }
};
