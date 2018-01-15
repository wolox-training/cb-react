import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../Auth/authentication';

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
