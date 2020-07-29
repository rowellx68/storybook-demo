import { Interpolation } from '@emotion/core';

export const breakpoint = {
  sm: (...styles: Interpolation<undefined>[]) => {
    return {
      '@media screen and (min-width: 640px)': styles,
    };
  },
  md: (...styles: Interpolation<undefined>[]) => {
    return {
      '@media screen and (min-width: 768px)': styles,
    };
  },
};
