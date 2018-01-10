import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home books={this.props.books} />} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
