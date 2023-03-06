import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

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
      <Image
        resizeMode="contain"
        source={require('../../assets/images/Logo.png')}
        style={styles.logoStyle}
      />
      <Text style={styles.textStyles}>BBA Wallet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  textStyles: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  logoStyle: {
    height: height * 0.25,
    width: '100%',
  },
});

export default LoadingScreen;
