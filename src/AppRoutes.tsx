import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import InitialStackNavigation from './navigation/InitialStackNavigation';
import MainStackNavigation from './navigation/MainStackNavigation';

import themes from './config/theme';
import storageKeys from './config/storageKeys';
import storage from './utils/storage';
import {RootState} from './store';
import LoadingScreen from './screens/initialize/LoadingScreen';

function AppRoutes(): JSX.Element {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = React.useState(false);
  const {loading, theme} = useSelector((state: RootState) => state.app);
  const _theme = themes[theme];

  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const session = await storage.getItem(storageKeys.SESSION_KEY);
        if (session) {
          // dispatch();
        }
      } finally {
        performTimeConsumingTask().then(result => {
          if (result !== null) {
            setIsReady(true);
          }
        });
      }
    })();
  }, [dispatch]);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <PaperProvider theme={_theme}>
      <NavigationContainer theme={_theme}>
        {loading ? <MainStackNavigation /> : <InitialStackNavigation />}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppRoutes;
