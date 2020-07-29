/** @jsx jsx */
import React, { ReactNode } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

const flexContainer = css({
  display: 'flex',
  flex: 1,
  flexDirection: 'column-reverse',
  '@media screen and (min-width: 640px)': {
    flexDirection: 'row'
  }
});

interface Props {
  children: ReactNode;
  styles?: SerializedStyles;
}

const FlexContainer: React.FunctionComponent<Props> = ({
  children,
  styles = {}
}) => {
  const containerStyles = css(flexContainer, styles);

  return <div css={containerStyles}>{children}</div>;
};

export default FlexContainer;
