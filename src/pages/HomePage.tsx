/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';

import BasePage from 'pages/BasePage';
import Greeter from 'components/Greeter';

import UserContext from 'contexts/UserContext';
import YearlyAllowanceCard from 'components/YearlyAllowanceCard';

const HomePage: React.FunctionComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <BasePage title='Home'>
      <Greeter name={user.firstName} />
      <YearlyAllowanceCard remaining={22} used={3} />
    </BasePage>
  );
};

export default HomePage;
