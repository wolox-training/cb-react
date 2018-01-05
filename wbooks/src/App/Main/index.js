import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import BookDetail from './BookDetail';
import Profile from './Profile';

class Main extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' render={() => <Dashboard books={this.props.books} />} />
        <Route path='/books/:number' component={BookDetail} />
        <Route path='/profile/:name' component={Profile} />
      </Switch>
    );
  }
}

export default Main;
