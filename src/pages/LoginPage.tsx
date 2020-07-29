/** @jsx jsx */
import React, { useContext, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

import AsyncButton from 'components/AsyncButton';
import BasePage from 'pages/BasePage';
import Box from 'components/Box';
import UserContext from 'contexts/UserContext';
import { breakpoint } from 'styles/mixins';

const containerStyles = css({
  ...breakpoint.md({
    maxWidth: '50%',
    margin: '0 auto',
  }),
});

const LoginPage: React.FunctionComponent = () => {
  const [executing, setExecuting] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { setUser } = useContext(UserContext);

  const { from } = (location.state as { from: { pathname: string } }) || {
    from: { pathname: '/' },
  };

  const login = async () => {
    setExecuting(true);

    const response = await axios.post('/api/login');

    setUser(response.data);
    history.replace(from);
  };

  return (
    <BasePage title='Login'>
      <div css={containerStyles}>
        <Box>
          <h1>Login</h1>
          <AsyncButton
            data-test='login-page-login-button'
            fullWidth
            disabled={executing}
            onClick={login}>
            Login
          </AsyncButton>
        </Box>
      </div>
    </BasePage>
  );
};

export default LoginPage;
