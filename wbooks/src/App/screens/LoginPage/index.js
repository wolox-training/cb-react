import { connect } from 'react-redux';

import Layout from './layout';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Layout);
