import { connect } from 'react-redux';

import { logout } from '../../../../../../redux/Auth/actions';

import Layout from './layout';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    localStorage.removeItem('token');
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
