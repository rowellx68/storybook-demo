/** @jsx jsx */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { jsx } from '@emotion/core';

import { button } from './collapsible-shared-styles';

interface LinkProps {
  expanded: boolean;
  icons: string[];
  to: string;
  exact?: boolean;
  label?: string;
}

const CollapsibleLink: React.FunctionComponent<LinkProps> = ({
  expanded,
  icons,
  to,
  exact = true,
  label
}) => {
  return (
    <NavLink exact={exact} title={label} to={to} css={button}>
      {expanded ? (
        <React.Fragment>
          <i className={icons[0]} aria-hidden='true'></i>
          <span>{label}</span>
        </React.Fragment>
      ) : (
        <i className={icons[1] || icons[0]} aria-hidden='true'></i>
      )}
    </NavLink>
  );
};

export default CollapsibleLink;
