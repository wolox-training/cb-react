import { connect } from 'react-redux';

import { authOk } from '../../redux/Auth/actions';
import { getId } from '../../redux/User/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  onMount: () => {
    if (localStorage.getItem('token')) {
      dispatch(authOk());
      dispatch(getId());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
