/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { headers } from 'styles/text';

const greeterStyles = css({
  marginBottom: '1rem',
  ...headers.h1,
});

const timeOfDay = (hour: number): string => {
  if (hour <= 11) {
    return 'morning';
  } else if (hour <= 16) {
    return 'afternoon';
  }

  return 'evening';
};

interface GreeterProps {
  name: string;
  subtitle?: string;
}

const Greeter: React.FunctionComponent<GreeterProps> = ({ name, subtitle }) => {
  const date = new Date();

  return (
    <div css={greeterStyles}>
      <h1>
        Good {timeOfDay(date.getHours())}, {name}!
      </h1>
      {subtitle ? <h2>{subtitle}</h2> : null}
    </div>
  );
};

export default Greeter;
