import React, { Component } from 'react';
import './styles.css';
import NavBar from './NavBar';
import MainContent from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContent books={this.props.books}/>
      </div>
    );
  }
}

export default App;
