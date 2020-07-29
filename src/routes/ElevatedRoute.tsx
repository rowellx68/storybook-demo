import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage';

interface ElevatedRouteProps extends RouteProps {
  condition: boolean;
  children: React.ReactNode;
}

const ElevatedRoute: React.FunctionComponent<ElevatedRouteProps> = ({
  condition,
  location,
  children,
  ...rest
}) => {
  return (
    <Route {...rest}>
      {condition ? (
        <React.Fragment>{children}</React.Fragment>
      ) : (
        <ErrorPage type='not-allowed' />
      )}
    </Route>
  );
};

export default ElevatedRoute;
