import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PrivateLayout from '../../Layout/PrivateLayout';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <PrivateLayout>
          <Component {...matchProps} />
      </PrivateLayout>
    )} />
  )
};
export default PrivateRoute;