import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import BookDetail from './BookDetail';
import Profile from './Profile';
import './styles.css';

class Main extends React.Component {
  render() {
    return(
      <div className="main-content">
        <Switch>
          <Route exact path='/' render={() => <Dashboard books={this.props.books} />} />
          <Route path='/books/:number' render={({match}) => <BookDetail books={this.props.books} match={match} />}/>
          <Route path='/profile/:id' component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Main;
