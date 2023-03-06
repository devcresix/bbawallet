import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

function WelcomeScreen(): JSX.Element {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>WelcomeScreen</Text>
    </View>
  );
}

export default WelcomeScreen;
