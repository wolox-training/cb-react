import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
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
