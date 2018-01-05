import React, { Component } from 'react';
import './styles.css';
import NavBar from './NavBar';
// import MainContent from './Home';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main books={this.props.books}/>
      </div>
    );
  }
}

export default App;
