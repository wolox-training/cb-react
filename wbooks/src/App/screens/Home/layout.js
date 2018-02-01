import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';
import Main from './screens/Main';

class Home extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool,
  onMount: PropTypes.func
};

export default Home;
