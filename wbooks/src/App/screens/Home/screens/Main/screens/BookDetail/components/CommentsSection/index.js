import { connect } from 'react-redux';

import { getComments } from '../../../../../../../../redux/Comments/actions';

import Layout from './layout';

const getLastFourComments = comments =>
  comments
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    .reverse()
    .slice(0, 4);

const mapStateToProps = state => ({
  comments: getLastFourComments(state.comments.commentsList),
  bookId: state.book.info.id
});

const mapDispatchToProps = dispatch => ({
  getBookComments: id => {
    dispatch(getComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
