import React from 'react';

interface WhenTrueProps {
  condition: boolean;
}

const If: React.FunctionComponent<WhenTrueProps> = ({
  condition,
  children,
}) => {
  return condition ? <React.Fragment>{children}</React.Fragment> : null;
};

export default If;
