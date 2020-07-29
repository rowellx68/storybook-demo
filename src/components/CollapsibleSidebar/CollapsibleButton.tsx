/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { button } from './collapsible-shared-styles';

interface ButtonProps {
  expanded: boolean;
  icon: string;
  expandIcon?: string;
  label?: string;
  onClick: () => void;
}

const buttonStyles = css(button, {
  fontSize: '1.5rem',
});

const CollapsibleButton: React.FunctionComponent<ButtonProps> = ({
  onClick,
  expanded,
  icon,
  expandIcon,
  label,
}) => {
  return (
    <button css={buttonStyles} onClick={onClick}>
      <i
        className={expanded ? expandIcon ?? icon : icon}
        aria-hidden='true'></i>
      {expanded ? <span>{label}</span> : null}
    </button>
  );
};

export default CollapsibleButton;
