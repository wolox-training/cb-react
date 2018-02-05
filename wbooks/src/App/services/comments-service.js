import api from '../config/api';

const endpoints = {
  comments: '/books/id/comments'
};

export default {
  getComments(id) {
    return api.get(endpoints.comments.replace('id', id)).then(response => response.data);
  },
  postComment(bookId, userId, content) {
    return api.post(endpoints.comments.replace('id', bookId), {
      comment: { book_id: bookId, user_id: userId, content }
    });
  }
};
