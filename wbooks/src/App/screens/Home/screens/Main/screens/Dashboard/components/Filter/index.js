import { connect } from 'react-redux';

import { setFilter } from '../../../../../../../../redux/Filter/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  type: state.filter.type,
  text: state.filter.texts
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (selection, text) => {
    dispatch(setFilter(selection, text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
