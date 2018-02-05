import UserService from '../../services/user-service';

export const addId = id => ({ type: 'ADD_ID', payload: id });
export const addWishlist = wishlist => ({ type: 'ADD_WISHLIST', payload: wishlist });
export const addRents = rents => ({ type: 'ADD_RENTS', payload: rents });
export const addInfoRentsWishlistAndComments = ([info, rents, wishlist, comments]) => ({
  type: 'ADD_INFO_RENTS_WISHLIST_AND_COMMENTS',
  payload: { info, rents, wishlist, comments }
});
export function getId() {
  return dispatch => UserService.getId().then(id => dispatch(addId(id)));
}
export function getInfoRentsWishListAndComments(id) {
  return dispatch =>
    Promise.all([
      UserService.getInfo(id),
      UserService.getRents(id),
      UserService.getWishList(id),
      UserService.getComments(id)
    ]).then(values => {
      dispatch(addInfoRentsWishlistAndComments(values));
    });
}
