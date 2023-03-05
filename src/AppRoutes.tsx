/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DiscoverPage from './pages/Discover';
import WalletPage from './pages/Wallet';
import BrowserPage from './pages/Browser';
import SettingPage from './pages/Setting';

import themes from './config/theme';
import {RootState} from './store';

const Tab = createMaterialBottomTabNavigator();

function AppRoutes(): JSX.Element {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const _theme = themes[theme];

  return (
    <PaperProvider theme={_theme}>
      <NavigationContainer theme={_theme}>
        <Tab.Navigator>
          <Tab.Screen
            name="Discover"
            component={DiscoverPage}
            options={{
              tabBarIcon: ({color}) => (
                <Ionicons name="stats-chart" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={WalletPage}
            options={{
              tabBarIcon: ({color}) => (
                <Ionicons name="wallet" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Browser"
            component={BrowserPage}
            options={{
              tabBarIcon: ({color}) => (
                <FontAwesome name="safari" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingPage}
            options={{
              tabBarBadge: 3,
              tabBarIcon: ({color}) => (
                <Ionicons name="settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppRoutes;
