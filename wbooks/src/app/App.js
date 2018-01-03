import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import MainContent from './mainContent/MainContent';

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
