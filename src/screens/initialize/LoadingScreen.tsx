import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const {height} = Dimensions.get('window');

function LoadingScreen(): JSX.Element {
  return (
    <View style={styles.viewStyles}>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/Logo.png')}
        style={styles.logoStyle}
      />
      <Text style={styles.textStyles}>BBA Wallet</Text>
      <ActivityIndicator animating={true} style={styles.indicatorStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc266',
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
  indicatorStyle: {
    top: 100,
  },
});

export default LoadingScreen;
