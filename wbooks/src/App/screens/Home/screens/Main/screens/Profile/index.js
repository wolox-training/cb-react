import { connect } from 'react-redux';

import { getInfoRentsWishListAndComments } from '../../../../../../redux/User/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  id: state.user.id,
  info: state.user.info,
  wishlist: state.user.wishlist,
  rents: state.user.rents,
  comments: state.user.comments,
  isLoading: state.user.isLoading
});

const mapDispatchToProps = dispatch => ({
  handleMount: id => {
    dispatch(getInfoRentsWishListAndComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
