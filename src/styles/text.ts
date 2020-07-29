import { breakpoint } from './mixins';

export const headers = {
  h1: {
    fontSize: '1.7rem',
    ...breakpoint.sm({
      fontSize: '2rem',
    }),
  },
};
