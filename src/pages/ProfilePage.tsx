/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';

import BasePage from 'pages/BasePage';
import { headers } from 'styles/text';
import UserContext from 'contexts/UserContext';

const greeterStyles = css({
  marginBottom: '1rem',
  ...headers.h1,
});

const ProfilePage: React.FunctionComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <BasePage title='Profile'>
      <div css={greeterStyles}>
        <h1>Hi, {user.firstName}</h1>
      </div>
    </BasePage>
  );
};

export default ProfilePage;
