import { css } from '@emotion/core';

// import { defaultText, fontFamily, primary } from 'styles/shared-styles';
import { breakpoint } from 'styles/mixins';
import { colours, fonts } from 'styles/variables';

export const button = css({
  padding: '0.5rem',
  borderRadius: '0.25rem',
  border: 'none',
  background: '#f5f6fa',
  display: 'inline-flex',
  textDecoration: 'none',
  color: colours.gray[700],
  ':hover': {
    background: 'rgba(0, 0, 0, 0.1)',
  },
  ...breakpoint.sm({
    marginBottom: '0.5rem',
    ':last-of-type': {
      marginBottom: 0,
    },
  }),
  '&.active': {
    color: colours.primary,
    background: '#ffffff',
  },
  i: {
    fontSize: '1.5rem',
    opacity: 1,
  },
  span: {
    display: 'none',
    alignItems: 'center',
    flex: 1,
    fontSize: '1rem',
    padding: '0 0.75rem',
    fontFamily: fonts.default,
    ...breakpoint.sm({
      display: 'flex',
    }),
  },
});
