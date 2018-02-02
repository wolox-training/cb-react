import UserService from '../../services/user-service';

export const addId = id => ({ type: 'ADD_ID', payload: id });
export const addWishlist = wishlist => ({ type: 'ADD_WISHLIST', payload: wishlist });
export function getId() {
  return dispatch => UserService.getId().then(id => dispatch(addId(id)));
}
