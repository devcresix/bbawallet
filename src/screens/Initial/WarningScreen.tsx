import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';
import {withTranslation} from '../../hooks/useTranslations';

function WarningScreen({navigation, t}: any) {
  const {colors} = useTheme();
  const handleStart = () => {
    navigation.push('Create');
  };

  return (
    <InitLayout>
      <Text
        style={{
          ...styles.titleStyles,
          color: colors.text,
        }}>
        {t('warning-screen.title')}
      </Text>
      <View style={styles.paddingStyle} />
      <View style={styles.viewWarningStyle}>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          {t('warning-screen.description1')}
        </Text>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          {t('warning-screen.description2')}
        </Text>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          {t('warning-screen.description3')}
        </Text>
      </View>
      <View style={styles.paddingStyle} />
      <View style={styles.paddingStyle} />

      <View style={styles.optionsStyle}>
        <View style={styles.paddingStyle} />
        <Button
          mode="contained"
          icon="shield-check"
          title={t('warning-screen.accept')}
          onPress={handleStart}
        />
      </View>
    </InitLayout>
  );
}

const styles = StyleSheet.create({
  paddingStyle: {
    height: 16,
  },
  titleStyles: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewWarningStyle: {
    marginLeft: 30,
    marginRight: 30,
  },
  textWarningStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsStyle: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: 25,
  },
  optionButtonTextStyle: {
    fontWeight: 'bold',
  },
});

export default withTranslation()(WarningScreen);
