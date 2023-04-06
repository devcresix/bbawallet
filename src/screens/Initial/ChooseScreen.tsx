import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';

function ChooseScreen({navigation}: any) {
  const handleCreateAccount = () => {
    navigation.push('Warning');
  };

  return (
    <InitLayout>
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
    </InitLayout>
  );
}

const styles = StyleSheet.create({
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
