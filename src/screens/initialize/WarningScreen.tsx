import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';

function WarningScreen({navigation}: any) {
  const handleStart = () => {
    navigation.push('Create');
  };

  return (
    <InitLayout>
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
        <Button icon="play" title="Start" onPress={handleStart} />
      </View>
    </InitLayout>
  );
}

const styles = StyleSheet.create({
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
