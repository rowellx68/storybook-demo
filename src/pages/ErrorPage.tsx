/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { colours } from 'styles/variables';

const layout = css({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  boxSizing: 'border-box',
  i: {
    fontSize: '4rem',
    color: colours.primary,
  },
  p: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: colours.primary,
    textAlign: 'center',
  },
});

interface ErrorPageProps {
  type: 'not-found' | 'not-allowed';
}

const errors = {
  'not-found': {
    title: 'Page Not Found',
    icon: 'las la-fw la-3x la-plane-departure',
    message: 'Whoops, it seems like this page has gone on holiday.',
  },
  'not-allowed': {
    title: 'Not Allowed',
    icon: 'las la-fw la-3x la-hand-paper',
    message: 'Sorry, you do not have access to this page.',
  },
};

const ErrorPage: React.FunctionComponent<ErrorPageProps> = ({ type }) => {
  return (
    <React.Fragment>
      <Helmet title={errors[type].title} />
      <div css={layout}>
        <i className={errors[type].icon} aria-hidden='true'></i>
        <p>{errors[type].message}</p>
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
