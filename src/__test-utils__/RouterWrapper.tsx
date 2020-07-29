import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

const RouterWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <MemoryRouter keyLength={0}>
      <Route exact path='/' />
      {children}
    </MemoryRouter>
  );
};

export default RouterWrapper;
