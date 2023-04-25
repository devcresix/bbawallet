/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import AssetsScreen from '../screens/Assets';
import SettingScreen from '../screens/Setting';
import TransactionsScreen from '../screens/Transactions';
import {TabNavigator} from '../components/TabNavigator';

const Tab = createBottomTabNavigator();

export const BottomBarNavigation = () => {
  return (
    <>
      <StatusBar hidden />
      <Tab.Navigator
        initialRouteName="Assets"
        tabBar={props => <TabNavigator {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#d9d9d9',
          tabBarLabelStyle: {display: 'none'},
          tabBarStyle: {
            borderTopColor: '#66666666',
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Assets"
          component={AssetsScreen}
          options={{
            tabBarBadge: 1,
            tabBarIcon: ({color}) => (
              <Ionicons name="pie-chart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({color}) => (
              <FontAwesome name="history" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
