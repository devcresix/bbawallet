/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Appbar from '../components/Appbar';

// Screens
import AssetsScreen from '../screens/Assets';
import TransactionsScreen from '../screens/Transactions';
import SettingScreen from '../screens/Setting';
import AddressBookScreen from '../screens/Setting/AddressBookScreen';
import LanguageScreen from '../screens/Setting/LanguageScreen';
import ThemeScreen from '../screens/Setting/ThemeScreen';
import AboutScreen from '../screens/Setting/AboutScreen';

// Store
import constants from '../config/constants';
import {RootState} from '../store';

const Sta = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomBarNavigation() {
  const {colors} = useTheme();
  const {theme} = useSelector((state: RootState) => state.app);

  return (
    <>
      <StatusBar
        barStyle={
          theme === constants.THEME_DARK ? 'light-content' : 'dark-content'
        }
        backgroundColor={colors.background}
        // animated
      />
      <Tab.Navigator
        initialRouteName="Assets"
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {display: 'none'},
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
}

function MainStackNavigation() {
  // const {loading} = useSelector((state: RootState) => state.app.loading);
  // const {colors} = useTheme();
  return (
    <>
      <Sta.Navigator screenOptions={{header: props => <Appbar {...props} />}}>
        <Sta.Screen
          name="Home"
          component={BottomBarNavigation}
          options={{headerShown: false}}
        />
        <Sta.Screen
          name="AddressBook"
          component={AddressBookScreen}
          options={{
            cardStyle: styles.cardStyle,
          }}
        />
        <Sta.Screen
          name="Language"
          component={LanguageScreen}
          options={{
            cardStyle: styles.cardStyle,
          }}
        />
        <Sta.Screen
          name="Theme"
          component={ThemeScreen}
          options={{
            cardStyle: styles.cardStyle,
          }}
        />
        <Sta.Screen
          name="About"
          component={AboutScreen}
          options={{
            cardStyle: styles.cardStyle,
          }}
        />
      </Sta.Navigator>
      {/* {loading && (
        <Portal>
          <View
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
          </View>
        </Portal>
      )} */}
    </>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    // marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'transparent',
  },
});

export default MainStackNavigation;
