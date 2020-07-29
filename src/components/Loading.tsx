/** @jsx jsx */
import React from 'react';
import { css, jsx, keyframes } from '@emotion/core';

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});

const loading = css({
  padding: '0.5rem',
  display: 'inline-block',
  i: {
    animation: `${rotate} 1s ease-out infinite`,
    fontSize: '1.5rem',
    opacity: 0.5
  }
});

interface LoadingProps {
  children?: React.ReactElement;
}

const Loading: React.FunctionComponent<LoadingProps> = ({ children }) => {
  return (
    <div css={loading}>{children ?? <i className='las la-fw la-sync'></i>}</div>
  );
};

export default Loading;
