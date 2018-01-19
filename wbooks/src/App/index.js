import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
