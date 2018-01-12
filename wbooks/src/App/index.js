import React, { Component } from 'react';
import './styles.css';
import NavBar from './NavBar';
import Main from './Main'
import * as propTypes from './Constants/propTypes';

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

App.propTypes = propTypes.booksPropTypes;

export default App;
