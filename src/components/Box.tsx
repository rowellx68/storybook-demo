/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { shadows } from 'styles/variables';

const boxStyles = css(shadows.default, {
  padding: '1em',
  borderRadius: '1em',
});

const Box: React.FunctionComponent = ({ children, ...rest }) => {
  return (
    <div {...rest} css={boxStyles}>
      {children}
    </div>
  );
};

export default Box;
