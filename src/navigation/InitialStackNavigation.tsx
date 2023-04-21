import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/Initial/OnboardingScreen';
import ChooseScreen from '../screens/Initial/ChooseScreen';
import WarningScreen from '../screens/Initial/WarningScreen';
import CreateScreen from '../screens/Initial/CreateScreen';
import ConfirmScreen from '../screens/Initial/ConfirmScreen';
import RecoveryScreen from '../screens/Initial/RecoveryScreen';

const Stack = createStackNavigator();

function InitialStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Choose" component={ChooseScreen} />
      <Stack.Screen name="Warning" component={WarningScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
    </Stack.Navigator>
  );
}

export default InitialStackNavigation;
