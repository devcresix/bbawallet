import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import InitialStackNavigation from './navigation/InitialStackNavigation';
import MainStackNavigation from './navigation/MainStackNavigation';
import LoadingScreen from './screens/Initial/LoadingScreen';

import themes from './config/theme';
import storage from './utils/storage';
import storageKeys from './config/storageKeys';
import useAppConfig from './hooks/useAppConfig';
import useMasterKey from './hooks/useMasterKey';
import useNetworks from './hooks/useNetworks';
import useTranslations from './hooks/useTranslations';
import {RootState} from './store';

function AppRoutes() {
  useAppConfig();
  useTranslations();

  const {currentKey, masterKeys, loadMasterKeys} = useMasterKey();
  const {network, loadNetwork} = useNetworks();

  const {loaded, initialized, theme} = useSelector(
    (state: RootState) => state.app,
  );

  useEffect(() => {
    setTimeout(async () => {
      await loadMasterKeys();
      await loadNetwork();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
