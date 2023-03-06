import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import BirthDateScreen from '../screens/initials/birth-date.screen';
// import NameScreen from '../screens/initials/name.screen';
// import NumberScreen from '../screens/initials/number.screen';
// import RelationshipScreen from '../screens/initials/relationship.screen';
// import SexScreen from '../screens/initials/sex.screen';
import WelcomeScreen from '../screens/initialize/WelcomeScreen';

const Stack = createStackNavigator();

function InitialStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
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
