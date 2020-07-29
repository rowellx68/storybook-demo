import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

import ElevatedRoute from 'routes/ElevatedRoute';
import { hasRequiredRoles, roles } from 'utilities/roles-utilities';
import UserContext from 'contexts/UserContext';

const AdminRequestsPage = React.lazy(() =>
  import('pages/admin/AdminRequestsPage'),
);
const AdminBookingsPage = React.lazy(() =>
  import('pages/admin/AdminBookingsPage'),
);
const AdminUsersPage = React.lazy(() => import('pages/admin/AdminUsersPage'));
const AdminTasksPage = React.lazy(() => import('pages/admin/AdminTasksPage'));
const ErrorPage = React.lazy(() => import('pages/ErrorPage'));

const AdminRouter: React.FunctionComponent = () => {
  const { path } = useRouteMatch();
  const { user } = useContext(UserContext);

  const isElevatedUser = hasRequiredRoles(user.roles, false, ...roles.elevated);
  const isAdminUser = hasRequiredRoles(user.roles, true, roles.admin);

  return (
    <React.Fragment>
      <Helmet
        titleTemplate='%s | Admin | Holiday Planner'
        defaultTitle='Admin'
      />
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/requests`} />
        </Route>

        <ElevatedRoute
          exact
          path={`${path}/requests`}
          condition={isElevatedUser}
          children={<AdminRequestsPage />}
        />
        <ElevatedRoute
          exact
          path={`${path}/bookings`}
          condition={isElevatedUser}
          children={<AdminBookingsPage />}
        />
        <ElevatedRoute
          exact
          path={`${path}/users`}
          condition={isElevatedUser}
          children={<AdminUsersPage />}
        />
        <ElevatedRoute
          exact
          path={`${path}/tasks`}
          condition={isAdminUser}
          children={<AdminTasksPage />}
        />
        <Route path={`${path}/*`} children={<ErrorPage type='not-found' />} />
      </Switch>
    </React.Fragment>
  );
};

export default AdminRouter;
