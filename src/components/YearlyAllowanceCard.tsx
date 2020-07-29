/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import Box from 'components/Box';
import { breakpoint } from 'styles/mixins';
import { colours } from 'styles/variables';

const container = css({
  display: 'flex',
});

let column = css({
  flex: 1,
  textAlign: 'center',
  padding: '0 1rem',
  borderBottom: 'none',
  borderRight: `1px solid ${colours.gray[200]}`,
  ':first-of-type': {
    paddingLeft: 0,
  },
  ':last-of-type': {
    border: 'none',
    paddingRight: 0,
  },
  '.label': {
    paddingTop: '0.5rem',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
  },
  '.value': {
    fontSize: '1.2rem',
    fontWeight: 'bolder',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    ...breakpoint.md({
      fontSize: '1.6rem',
    }),
  },
});

interface AllowanceValueProps {
  value: string;
  label: string;
}

const AllowanceValue: React.FunctionComponent<AllowanceValueProps> = ({
  value,
  label,
}) => {
  return (
    <div css={column}>
      <div className='value'>{value}</div>
      <div className='label'>{label}</div>
    </div>
  );
};

interface YearlyAllowanceCardProps {
  remaining: number;
  used: number;
}

const YearlyAllowanceCard: React.FunctionComponent<YearlyAllowanceCardProps> = ({
  remaining,
  used,
}) => {
  const total = remaining + used;

  const pluraliser = (value: number) => `${value} day${value === 1 ? '' : 's'}`;

  return (
    <Box css={container}>
      <AllowanceValue value={pluraliser(remaining)} label='remaining' />
      <AllowanceValue value={pluraliser(used)} label='used' />
      <AllowanceValue value={pluraliser(total)} label='total' />
    </Box>
  );
};

export default YearlyAllowanceCard;
