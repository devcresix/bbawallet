import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';

function ChooseScreen({navigation}: any) {
  const handleCreateAccount = () => {
    navigation.push('Warning');
  };

  return (
    <View style={styles.viewStyles}>
      <View style={styles.containerStyles}>
        <Image
          style={styles.logoStyle}
          resizeMode="contain"
          source={require('../../assets/images/Logo.png')}
        />
        <Text style={styles.textStyles}>Create or Recovery</Text>
        <View style={styles.paddingStyle} />
        <View style={styles.paddingStyle} />

        <View style={styles.optionsStyle}>
          <Button
            icon="plus"
            title="Create Account"
            onPress={handleCreateAccount}
          />
          <View style={styles.paddingStyle} />
          <Button
            icon="lock-reset"
            title="Recover Account"
            // onPress={}
          />
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
    height: 180,
    width: '100%',
  },
  paddingStyle: {
    height: 16,
  },
  textStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  optionsStyle: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: 25,
  },
});

export default ChooseScreen;
