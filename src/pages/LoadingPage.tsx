/** @jsx jsx */
import React from 'react';
import { css, jsx, keyframes } from '@emotion/core';
import { Helmet } from 'react-helmet';

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const layout = css({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  i: {
    animation: `${rotate} 1s ease-out infinite`,
    fontSize: '2rem',
    opacity: 0.5,
  },
});

const LoadingPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Helmet title='Loading...' />
      <div css={layout}>
        <i className='las la-fw la-sync'></i>
      </div>
    </React.Fragment>
  );
};

export default LoadingPage;
