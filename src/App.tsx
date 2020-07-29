/** @jsx jsx */
import React, { useState } from 'react';
import { Global, jsx, css, Interpolation } from '@emotion/core';
import { Helmet } from 'react-helmet';

import '__stub__/server';
import styles from './styles/global-styles';

import AppRouter from 'routes/AppRouter';
import UserContext from 'contexts/UserContext';
import PageContext from 'contexts/PageContext';
import { colours } from 'styles/variables';

const globalStyles = css(styles as Interpolation);

const App: React.FunctionComponent = () => {
  const [user, setUser] = useState({
    authenticated: false,
    id: '',
    firstName: '',
    lastName: '',
    roles: [] as string[],
  });
  const userCtx = { user, setUser };

  const [name, setPage] = useState('user');
  const pageCtx = { name, setPage };

  const isAdminPage = name === 'admin';

  return (
    <UserContext.Provider value={userCtx}>
      <PageContext.Provider value={pageCtx}>
        <Helmet
          titleTemplate='%s | Holiday Planner'
          defaultTitle='Holiday Planner'
        />
        <Global styles={globalStyles} />
        {isAdminPage ? (
          <Global styles={{ ':root': { '--primary': colours.gray[800] } }} />
        ) : null}
        <AppRouter />
      </PageContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
