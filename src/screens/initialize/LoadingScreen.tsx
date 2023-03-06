import React, {useEffect} from 'react';
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

function LoadingScreen(): JSX.Element {
  useEffect(() => {
    performTimeConsumingTask().then(result => {
      if (result !== null) {
      }
    });
  });

  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>LoadingScreen</Text>
    </View>
  );
}

export default LoadingScreen;
