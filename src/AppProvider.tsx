import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './store';

const AppProvider = ({children}: any) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default AppProvider;
