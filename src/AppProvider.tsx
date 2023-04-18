import React from 'react';
import {LogBox} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './store';

const AppProvider = ({children}: any) => {
  LogBox.ignoreLogs([
    "The provided value 'moz",
    "The provided value 'ms-stream",
  ]);
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default AppProvider;
