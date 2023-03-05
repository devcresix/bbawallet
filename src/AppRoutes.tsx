/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DiscoverPage from './pages/Discover';
import WalletPage from './pages/Wallet';
import BrowserPage from './pages/Browser';
import SettingPage from './pages/Setting';

const Tab = createMaterialBottomTabNavigator();

function AppRoutes(): JSX.Element {
  return (
    <NavigationContainer>
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
  );
}

export default AppRoutes;
