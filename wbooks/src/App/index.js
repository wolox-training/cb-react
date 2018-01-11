import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
    }
  }

  isLoggedIn = () => {
    return this.state.isLoggedIn;
  }

  login = () => {
    this.setState({
      isLoggedIn : true,
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn : false,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} isLoggedIn={this.isLoggedIn} login={this.login} />} />
          <Route path="/signup" component={Signup} />
          <Route path="/" render={(props) => <Home {...props} isLoggedIn={this.isLoggedIn} books={this.props.books} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
