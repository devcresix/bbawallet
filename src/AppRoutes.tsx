import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import InitialStackNavigation from './navigation/InitialStackNavigation';
import MainStackNavigation from './navigation/MainStackNavigation';
import SplashScreen from './screens/splash/SplashScreen';

import themes from './config/theme';
import storageKeys from './config/storageKeys';
import storage from './utils/storage';
import {RootState} from './store';

const performTimeConsumingTask = async () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve('result');
    }, 2000),
  );
};

function AppRoutes(): JSX.Element {
  const [isReady, setIsReady] = React.useState(false);
  const theme = useSelector((state: RootState) => state.app.theme);
  const _theme = themes[theme];
  const dispatch = useDispatch();

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
    return <SplashScreen />;
  }

  return (
    <PaperProvider theme={_theme}>
      <NavigationContainer theme={_theme}>
        {false ? <MainStackNavigation /> : <InitialStackNavigation />}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppRoutes;
