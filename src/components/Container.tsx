/** @jsx jsx */
import React, { ReactNode } from 'react';
import { jsx } from '@emotion/core';

// import { container } from 'styles/shared-styles';

interface Props {
  children: ReactNode;
}

const Container: React.FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
