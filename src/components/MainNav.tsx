/** @jsx jsx */
import React, { ReactNode, useContext } from 'react';
import { css, jsx } from '@emotion/core';

import { NavLink } from 'react-router-dom';
import { shadows, colours } from 'styles/variables';
import PageContext from 'contexts/PageContext';

const nav = css(shadows.default, {
  backgroundColor: colours.primary,
  height: 50,
  zIndex: 1,
  transition: 'background-color 200ms ease-in',
});

const navItem = css({
  color: '#ffffff',
  height: 50,
  lineHeight: '50px',
  display: 'inline-block',
  textDecoration: 'none',
});

const navItemBrand = css(navItem, {
  fontWeight: 'bold',
  padding: '0 1.25rem',
});

interface Props {
  children?: ReactNode;
}

const MainNav: React.FunctionComponent<Props> = ({ children }) => {
  const { name } = useContext(PageContext);
  const isAdminPage = name === 'admin';

  return (
    <nav css={nav}>
      <NavLink exact to='/' css={navItemBrand}>
        {isAdminPage ? 'HP | Admin' : 'Holiday Planner'}
      </NavLink>
    </nav>
  );
};

export default MainNav;
