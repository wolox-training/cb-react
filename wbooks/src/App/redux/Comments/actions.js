import CommentsService from '../../services/comments-service';

export const ADD_COMMENTS = 'COMMENTS@@ ADD_COMMENTS';

export const addComments = comments => ({ type: ADD_COMMENTS, payload: comments });
export function getComments(bookId) {
  return dispatch =>
    CommentsService.getComments(bookId).then(comments => {
      dispatch(addComments(comments));
    });
}
export function postComment(bookId, userId, content) {
  return dispatch =>
    CommentsService.postComment(bookId, userId, content).then(() => dispatch(getComments(bookId)));
}
