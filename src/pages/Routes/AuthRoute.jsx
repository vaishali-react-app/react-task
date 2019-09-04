import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AuthLayout from '../../Layout/AuthLayout/AuthLayout';

const AuthRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <AuthLayout>
            <Component {...matchProps} />
        </AuthLayout>
      )} />
    )
  };
export default AuthRoute; 