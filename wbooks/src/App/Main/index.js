import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import BookDetail from './BookDetail';
import Profile from './Profile';
import * as propTypes from '../Constants/propTypes';
import './styles.css';

class Main extends React.Component {
  render() {
    return(
      <div className="main-content">
        <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
          <Route path='/books/:id' render={({match}) => <BookDetail match={match} />}/>
          <Route path='/profile/:name' component={Profile} />
        </Switch>
      </div>
    );
  }
}

Main.propTypes = propTypes.booksPropTypes;

export default Main;
