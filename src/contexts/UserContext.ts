import React from 'react';

interface User {
  authenticated: boolean;
  id: string;
  firstName: string;
  lastName: string;
  roles: string[];
  currentYearAllowance: {
    base: number;
    extra: number;
    bought: number;
    used: number;
    sold: number;
  };
}

const defaultValue = {
  user: {
    authenticated: false,
    id: '',
    firstName: '',
    lastName: '',
    roles: [] as string[],
  },
  setUser: (_user: User) => {},
};

const UserContext = React.createContext(defaultValue);
UserContext.displayName = 'UserContext';

export default UserContext;
