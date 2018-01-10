import React from 'react';
import NavBar from './NavBar';
import Main from './Main';

class Home extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <Main books={this.props.books}/>
      </div>
    );
  }
}

export default Home;
