import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  condition: boolean;
  redirectTo?: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  condition,
  location,
  redirectTo = '/login',
  children,
  ...rest
}) => {
  return (
    <Route {...rest}>
      {condition ? (
        <React.Fragment>{children}</React.Fragment>
      ) : (
        <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
      )}
    </Route>
  );
};

export default ProtectedRoute;
