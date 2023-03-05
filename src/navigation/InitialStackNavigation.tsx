import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import BirthDateScreen from '../screens/initials/birth-date.screen';
// import NameScreen from '../screens/initials/name.screen';
// import NumberScreen from '../screens/initials/number.screen';
// import RelationshipScreen from '../screens/initials/relationship.screen';
// import SexScreen from '../screens/initials/sex.screen';
import LoadingScreen from '../screens/loading/LoadingScreen';

const Stack = createStackNavigator();

function InitialStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Name">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{headerShown: false}}
      />
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
