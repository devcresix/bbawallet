import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {store} from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const AppProvider = ({children}: any) => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </StoreProvider>
  );
};

export default AppProvider;
