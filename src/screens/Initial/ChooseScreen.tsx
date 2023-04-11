import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';
import {withTranslation} from '../../hooks/useTranslations';

function ChooseScreen({navigation, t}: any) {
  const handleCreateAccount = () => {
    navigation.push('Warning');
  };

  return (
    <InitLayout>
      <Text style={styles.textStyles}>{t('choose-screen.title')}</Text>
      <View style={styles.paddingStyle} />
      <View style={styles.paddingStyle} />

      <View style={styles.optionsStyle}>
        <Button
          mode="contained"
          icon="plus"
          title={t('choose-screen.create-account')}
          onPress={handleCreateAccount}
        />
        <View style={styles.paddingStyle} />
        <Button
          mode="contained"
          icon="lock-reset"
          title={t('choose-screen.recover-account')}
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionsStyle: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: 25,
  },
});

export default withTranslation()(ChooseScreen);
