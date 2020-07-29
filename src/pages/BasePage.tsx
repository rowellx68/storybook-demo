/** @jsx jsx */
import React, { useContext, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';

import PageContext from 'contexts/PageContext';

interface BasePageProps {
  type?: 'user' | 'admin';
  title?: string;
}

const containerStyle = css({
  margin: '1rem',
});

const BasePage: React.FunctionComponent<BasePageProps> = ({
  type = 'user',
  title,
  children,
  ...rest
}) => {
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage(type);
  });

  return (
    <div {...rest} css={containerStyle}>
      {title ? <Helmet title={title} /> : null}
      {children}
    </div>
  );
};

export default BasePage;
