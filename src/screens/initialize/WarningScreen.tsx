import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';

function WarningScreen({navigation}: any) {
  const _handleStart = () => {
    navigation.push('Create');
  };

  return (
    <View style={styles.viewStyles}>
      <View style={styles.containerStyles}>
        <Image
          style={styles.logoStyle}
          resizeMode="contain"
          source={require('../../assets/images/Logo.png')}
        />
        <Text style={styles.titleStyles}>Keep your seed phrase safe!</Text>
        <View style={styles.paddingStyle} />
        <View style={styles.viewWarningStyle}>
          <Text style={styles.textWarningStyle}>
            You will need these words to restore your wallet if your browser's
            storage is cleared or your device is damaged or lost.
          </Text>
          <Text style={styles.textWarningStyle}>
            Never share your seed phrase (or your private keys) with anyone or
            enter it into any form, as it provides full control of your wallet.
          </Text>
          <Text style={styles.textWarningStyle}>
            BBA Labs or Development Team will never ask for your recovery phrase
            or private keys.
          </Text>
        </View>
        <View style={styles.paddingStyle} />
        <View style={styles.paddingStyle} />

        <View style={styles.optionsStyle}>
          <View style={styles.paddingStyle} />
          <Button icon="play" mode="contained" onPress={_handleStart}>
            <Text style={styles.optionButtonTextStyle}>Start</Text>
          </Button>
        </View>
      </View>
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
  containerStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 135,
    width: '100%',
  },
  paddingStyle: {
    height: 16,
  },
  titleStyles: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewWarningStyle: {
    marginLeft: 30,
    marginRight: 30,
  },
  textWarningStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsStyle: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: 25,
  },
  optionButtonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WarningScreen;
