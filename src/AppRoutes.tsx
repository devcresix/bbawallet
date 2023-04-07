import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import InitialStackNavigation from './navigation/InitialStackNavigation';
import MainStackNavigation from './navigation/MainStackNavigation';
import LoadingScreen from './screens/Initial/LoadingScreen';

import themes from './config/theme';
import useTranslations from './hooks/useTranslations';
import {RootState} from './store';
import useAccounts from './hooks/useAccounts';
import storage from './utils/storage';
import storageKeys from './config/storageKeys';

function AppRoutes() {
  useTranslations();
  const {current, accounts} = useAccounts();
  const {loaded, initialized, theme} = useSelector(
    (state: RootState) => state.app,
  );

  useEffect(() => {
    if (accounts.length > 0) {
      storage.setItem(storageKeys.ACCOUNTS, accounts);
    }
  }, [accounts]);

  useEffect(() => {
    if (current) {
      storage.setItem(storageKeys.CURRENT_ACCOUNT, current);
    }
  }, [current]);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <PaperProvider theme={themes[theme]}>
      <NavigationContainer theme={themes[theme]}>
        {loaded && initialized ? (
          <MainStackNavigation />
        ) : (
          <InitialStackNavigation />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppRoutes;
