/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActivityIndicator, Portal, Text, useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {BlurView} from '@react-native-community/blur';
import {useSelector} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {IBarIcon, IBarLabel} from '../types';
import DiscoverPage from '../pages/Discover';
import WalletPage from '../pages/Wallet';
import BrowserPage from '../pages/Browser';
import SettingPage from '../pages/Setting';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {RootState} from '../store';

const Sta = createStackNavigator();
const Tab = createBottomTabNavigator();

const BarIcon = ({color, size, name}: IBarIcon): JSX.Element => {
  return (
    <MaterialCommunityIcons
      color={color}
      size={size}
      name={name}
      style={{marginTop: 5}}
    />
  );
};

const BarLabel = ({color, children}: IBarLabel) => {
  return (
    <Text
      style={{
        fontSize: 10,
        lineHeight: 20,
        textAlign: 'center',
        color,
      }}>
      {children}
    </Text>
  );
};

function BottomBarNavigation() {
  const {colors} = useTheme();
  // const _barStyle = useIsDark() ? 'light-content' : 'dark-content';

  return (
    <>
      <StatusBar backgroundColor={colors.background} animated />
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
    </>
  );
}

function MainStackNavigation() {
  const loader = useSelector((state: RootState) => state.app.loader);
  const {colors} = useTheme();
  return (
    <>
      <Sta.Navigator screenOptions={{headerShown: false}}>
        <Sta.Screen name="Home" component={BottomBarNavigation} />
        <Sta.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            cardStyle: {
              backgroundColor: 'transparent',
              marginTop: 50,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
          }}
        />
      </Sta.Navigator>
      {loader && (
        <Portal>
          <BlurView
            style={[
              StyleSheet.absoluteFill,
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 50,
              },
            ]}>
            <View
              style={{
                backgroundColor: colors.background,
                padding: 20,
                borderRadius: 15,
              }}>
              <ActivityIndicator size={50} />
            </View>
          </BlurView>
        </Portal>
      )}
    </>
  );
}

export default MainStackNavigation;
