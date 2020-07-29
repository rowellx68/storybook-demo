/** @jsx jsx */
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import CollapsibleSidebar from 'components/CollapsibleSidebar/CollapsibleSidebar';
import MainNav from 'components/MainNav';
import If from 'components/If';
import UserContext from 'contexts/UserContext';
import LoadingPage from 'pages/LoadingPage';
import { hasRequiredRoles, roles } from 'utilities/roles-utilities';
import { breakpoint } from 'styles/mixins';
import { shadows } from 'styles/variables';

import AdminRouter from 'routes/AdminRouter';
import ProtectedRoute from 'routes/ProtectedRoute';
import { buildSidebarLinks } from 'routes/links';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const HomePage = React.lazy(() => import('pages/HomePage'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const ErrorPage = React.lazy(() => import('pages/ErrorPage'));

const flex = css({
  flex: 1,
  display: 'flex',
});

const flexContainer = css(flex, {
  overflow: 'hidden',
  flexDirection: 'column-reverse',
  '@media screen and (min-width: 640px)': {
    flexDirection: 'row',
  },
});

const contentStyle = css({
  flex: 1,
  overflow: 'auto',
});

const sidebarStyle = css({
  a: {
    ':nth-of-type(n+5)': {
      display: 'none',
      ...breakpoint.md({
        display: 'inline-flex',
      }),
    },
  },
});

const adminSidebarStyle = css(shadows.inset, {
  backgroundColor: 'rgba(0, 0, 0, 0.06)',
  a: {
    background: 'transparent',
    ':nth-of-type(-n+4)': {
      display: 'none',
    },
  },
  ...breakpoint.md({
    display: 'none',
  }),
});

const AppRouter: React.FunctionComponent = () => {
  const { user } = useContext(UserContext);
  const [isMobileView, setMobilView] = useState(true);

  const isElevatedUser = hasRequiredRoles(user.roles, false, ...roles.elevated);
  const isAdminUser = hasRequiredRoles(user.roles, true, roles.admin);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const listener = (ev: MediaQueryListEvent) => {
      setMobilView(!ev.matches);
    };
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  });

  const sidebar = buildSidebarLinks(isElevatedUser, isAdminUser);

  return (
    <Router>
      <MainNav />

      <div css={flexContainer}>
        <If condition={user.authenticated}>
          <CollapsibleSidebar styles={sidebarStyle} links={sidebar} />

          <If condition={isMobileView}>
            <CollapsibleSidebar
              collapsible={false}
              styles={adminSidebarStyle}
              links={sidebar}
            />
          </If>
        </If>

        <div css={contentStyle}>
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <ProtectedRoute
                exact
                condition={user.authenticated}
                path='/'
                children={<HomePage />}
              />
              <ProtectedRoute
                exact
                condition={user.authenticated}
                path='/dashboard'
                children={<DashboardPage />}
              />
              <ProtectedRoute
                exact
                condition={user.authenticated}
                path='/profile'
                children={<ProfilePage />}
              />
              <ProtectedRoute
                condition={user.authenticated}
                path='/admin'
                children={<AdminRouter />}
              />

              <Route path='/login' component={LoginPage} />
              <Route path='*' children={<ErrorPage type='not-found' />} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
