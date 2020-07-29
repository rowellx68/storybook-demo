/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

import { breakpoint } from 'styles/mixins';
import { colours } from 'styles/variables';

import CollapsibleLink from './CollapsibleLink';
import CollapsibleButton from './CollapsibleButton';

const sidebar = css({
  background: colours.light,
  padding: '0.5rem',
  display: 'flex',
  button: {
    display: 'none',
  },
  ...breakpoint.sm({
    flexDirection: 'column',
    button: {
      display: 'unset',
    },
  }),
});

const linkContainer = css({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-around',
  ...breakpoint.sm({
    flexDirection: 'column',
    justifyContent: 'initial',
  }),
});

export interface CollapsibleSidebarProps {
  collapsible?: boolean;
  links: Array<{
    icons: string[];
    label?: string;
    to: string;
    exact?: boolean;
  }>;
  styles?: SerializedStyles;
}

const CollapsibleSidebar: React.FunctionComponent<CollapsibleSidebarProps> = ({
  collapsible = true,
  links = [],
  styles = {},
}) => {
  const [expanded, setExpanded] = useState(false);

  const linksStyle = css(linkContainer, {
    width: expanded ? 200 : 'auto',
  });

  const sidebarStyle = css(sidebar, styles);

  return (
    <aside css={sidebarStyle}>
      <div css={linksStyle}>
        {links.map((l, i) => (
          <CollapsibleLink
            key={i}
            expanded={expanded}
            icons={l.icons}
            label={l.label}
            to={l.to}
            exact={l.exact ?? true}
          />
        ))}
      </div>
      {collapsible ? (
        <div>
          <CollapsibleButton
            expanded={expanded}
            icon='las la-fw la-angle-double-left'
            expandIcon='las la-fw la-angle-double-right'
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      ) : null}
    </aside>
  );
};

export default CollapsibleSidebar;
