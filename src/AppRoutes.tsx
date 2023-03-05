import React from 'react';
import {useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import InitialStackNavigation from './navigation/InitialStackNavigation';

import themes from './config/theme';
import {RootState} from './store';
import MainStackNavigation from './navigation/MainStackNavigation';

function AppRoutes(): JSX.Element {
  const theme = useSelector((state: RootState) => state.app.theme);
  const _theme = themes[theme];

  return (
    <PaperProvider theme={_theme}>
      <NavigationContainer theme={_theme}>
        {true ? <MainStackNavigation /> : <InitialStackNavigation />}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppRoutes;
