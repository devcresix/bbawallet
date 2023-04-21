import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import LoadingScreen from './screens/Loading';
import InitialStackNavigation from './navigation/InitialStackNavigation';
import MainStackNavigation from './navigation/MainStackNavigation';

import themes from './config/theme';
import storage from './utils/storage';
import storageKeys from './config/storageKeys';
import useTranslations from './hooks/useTranslations';
import useAppConfig from './hooks/useAppConfig';
import useMasterKey from './hooks/useMasterKey';
import useNetworks from './hooks/useNetworks';
import useAccounts from './hooks/useAccounts';
import {RootState} from './store';

function AppRoutes() {
  useAppConfig();
  useTranslations();

  const {network} = useNetworks();
  const {currentKey, masterKeys} = useMasterKey();
  const {getAccountFromKey} = useAccounts();

  const {loaded, initialized, theme} = useSelector(
    (state: RootState) => state.app,
  );

  useEffect(() => {
    if (loaded && network && currentKey) {
      getAccountFromKey(currentKey, network);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, network, currentKey]);

  useEffect(() => {
    if (masterKeys.length > 0) {
      storage.setItem(storageKeys.MASTERKEYS, masterKeys);
    }
  }, [masterKeys]);

  useEffect(() => {
    if (currentKey) {
      storage.setItem(storageKeys.CURRENTKEY, currentKey);
    }
  }, [currentKey]);

  useEffect(() => {
    if (network) {
      storage.setItem(storageKeys.CURRENT_NETWORK, network);
    }
  }, [network]);

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
