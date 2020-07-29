/** @jsx jsx */
import React from 'react';
import { css, keyframes, jsx } from '@emotion/core';

import { breakpoint } from 'styles/mixins';

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const loading = css({
  paddingRight: '0.3rem',
  display: 'inline-block',
  i: {
    animation: `${rotate} 0.8s ease-in-out infinite`,
  },
});

const button = css({
  fontSize: '1.2rem',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  color: 'var(--default-text)',
  border: 'none',
  background: '#f5f6fa',
  display: 'inline-flex',
  textDecoration: 'none',
  justifyContent: 'center',
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.8,
  },
  ':hover:not(:disabled)': {
    background: 'rgba(0, 0, 0, 0.1)',
  },
  ...breakpoint.sm({
    marginBottom: '0.5rem',
    ':last-of-type': {
      marginBottom: 0,
    },
  }),
});

interface AsyncButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fullWidth?: boolean;
  icon?: string;
  disabled: boolean;
}

const AsyncButton: React.FunctionComponent<AsyncButtonProps> = ({
  icon = 'las la-sync',
  fullWidth = false,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      css={css(button, { width: fullWidth ? '100%' : 'auto' })}
      disabled={disabled}>
      {disabled ? (
        <div css={loading}>
          <i className={icon} aria-hidden='true'></i>
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default AsyncButton;
