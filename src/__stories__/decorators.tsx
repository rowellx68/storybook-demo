/** @jsx jsx */
import React from 'react';
import { Global, css, jsx, Interpolation } from '@emotion/core';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { baseGlobalStyles } from 'styles/global-styles';
import { action } from '@storybook/addon-actions';

export const withEmotionGlobal = (story: Function) => {
  const style = css({...baseGlobalStyles, '#docs-root': { height: '100%', overflow: 'auto' }} as Interpolation);

  return (
    <React.Fragment>
      <Global styles={style} />
      {story()}
    </React.Fragment>
  );
};

const memoryHistory = createMemoryHistory();
memoryHistory.push = action('history.push');

export const withMemoryRouter = (story: Function) => {
  return (
    <Router history={memoryHistory}>
      <Route path='/' />
      {story()}
    </Router>
  );
};
