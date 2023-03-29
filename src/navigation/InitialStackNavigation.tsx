import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/initialize/WelcomeScreen';
import ChooseScreen from '../screens/initialize/ChooseScreen';
import WarningScreen from '../screens/initialize/WarningScreen';
import CreateScreen from '../screens/initialize/CreateScreen';

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
      {/*
      <Stack.Screen
        name="BirthDate"
        component={BirthDateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sex"
        component={SexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Relationship"
        component={RelationshipScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Number"
        component={NumberScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default InitialStackNavigation;
