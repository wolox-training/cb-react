import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../services/auth-service';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
      }}/>
    )
  )}/>
)
