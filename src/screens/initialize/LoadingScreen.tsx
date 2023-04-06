import React from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import InitLayout from '../../components/Layout/InitLayout';
// const {height} = Dimensions.get('window');

function LoadingScreen() {
  return (
    <InitLayout>
      <Text style={styles.textStyles}>BBA Wallet</Text>
      <ActivityIndicator animating={true} style={styles.indicatorStyle} />
    </InitLayout>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  indicatorStyle: {
    top: 100,
  },
});

export default LoadingScreen;
