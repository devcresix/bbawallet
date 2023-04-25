/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import Appbar from '../components/Appbar';
import {BottomBarNavigation} from './BottomBarNavigation';

// Screens
import TransferScreen from '../screens/Transfer';
import AmountScreen from '../screens/Amount';
import AddressBookScreen from '../screens/Setting/AddressBookScreen';
import AddAddressBookScreen from '../screens/Setting/AddAddressBookScreen';
import LanguageScreen from '../screens/Setting/LanguageScreen';
import ThemeScreen from '../screens/Setting/ThemeScreen';
import AboutScreen from '../screens/Setting/AboutScreen';

// Store
import useNetworks from '../hooks/useNetworks';

const Sta = createStackNavigator();

export const MainStackNavigation = () => {
  const navigation = useNavigation();
  const {network} = useNetworks();

  return (
    <>
      <Sta.Navigator
        screenOptions={{
          header: props => <Appbar {...props} back={props.back} />,
        }}>
        <Sta.Screen
          name="Home"
          component={BottomBarNavigation}
          options={{headerShown: false}}
        />
        <Sta.Screen
          name="Transfer"
          component={TransferScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar
                {...props}
                back={props.back}
                title={`Transfer ${network.symbol}`}
              />
            ),
          }}
        />
        <Sta.Screen
          name="Amount"
          component={AmountScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar
                {...props}
                back={props.back}
                title={`Transfer ${network.symbol}`}
              />
            ),
          }}
        />
        <Sta.Screen
          name="AddressBook"
          component={AddressBookScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar
                {...props}
                back={props.back}
                title={'Address Book'}
                rightIcon={'plus'}
                rightPress={() => {
                  navigation.dispatch(
                    CommonActions.navigate({
                      name: 'AddAddressBook',
                    }),
                  );
                }}
              />
            ),
          }}
        />
        <Sta.Screen
          name="AddAddressBook"
          component={AddAddressBookScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar {...props} back={props.back} title={'Add address'} />
            ),
          }}
        />
        <Sta.Screen
          name="Language"
          component={LanguageScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar {...props} back={props.back} title={'Language'} />
            ),
          }}
        />
        <Sta.Screen
          name="Theme"
          component={ThemeScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar {...props} back={props.back} title={'Theme'} />
            ),
          }}
        />
        <Sta.Screen
          name="About"
          component={AboutScreen}
          options={{
            cardStyle: styles.cardStyle,
            header: props => (
              <Appbar {...props} back={props.back} title={'About'} />
            ),
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
};

const styles = StyleSheet.create({
  cardStyle: {
    // marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'transparent',
  },
});

export default MainStackNavigation;
