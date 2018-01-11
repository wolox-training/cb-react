import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';

class Home extends React.Component {
  render() {
    if(!this.props.isLoggedIn()) {
      return <Redirect to="/login" />
    }
    return(
      <div>
        <NavBar />
        <Main books={this.props.books}/>
      </div>
    );
  }
}

export default Home;
