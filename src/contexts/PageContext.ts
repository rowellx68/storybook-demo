import React from 'react';

interface Page {
  name: string;
}

const defaultValue = {
  name: '',
  setPage: (_page: string) => {},
};

const PageContext = React.createContext(defaultValue);
PageContext.displayName = 'PageContext';

export default PageContext;
