import React from 'react';
import {LogBox} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import {store} from './store';

// const elementsTheme = createTheme({
//   lightColors: {
//     // background: 'rgb(67, 156, 224)',
//   },
//   darkColors: {
//     // background: '#130E56',
//   },
//   mode: 'light',
// });

const AppProvider = ({children}: any) => {
  LogBox.ignoreLogs([
    "The provided value 'moz",
    "The provided value 'ms-stream",
  ]);
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default AppProvider;
