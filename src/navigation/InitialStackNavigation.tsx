import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/initialize/WelcomeScreen';
import ChooseScreen from '../screens/initialize/ChooseScreen';
import WarningScreen from '../screens/initialize/WarningScreen';
import CreateScreen from '../screens/initialize/CreateScreen';
import ConfirmScreen from '../screens/initialize/ConfirmScreen';

const Stack = createStackNavigator();

function InitialStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Choose"
        component={ChooseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Warning"
        component={WarningScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default InitialStackNavigation;
