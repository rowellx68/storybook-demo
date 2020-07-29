import React from 'react';

interface IfOtherwiseProps {
  condition: boolean;
  children: React.ReactNode;
  otherwise: React.ReactNode;
}

const IfOtherwise: React.FunctionComponent<IfOtherwiseProps> = ({
  condition,
  children,
  otherwise,
}) => <React.Fragment>{condition ? children : otherwise}</React.Fragment>;

export default IfOtherwise;
