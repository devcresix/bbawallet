/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';
import {withTranslation} from '../../hooks/useTranslations';

function WarningScreen({navigation, t}: any) {
  const {colors} = useTheme();

  const [words, setWords] = React.useState('12');

  const handleStart = () => {
    const wordsNumber = Number(words);
    if (wordsNumber) {
      navigation.push('Create', {
        words: wordsNumber,
      });
    }
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
        <RadioButton.Group onValueChange={v => setWords(v)} value={words}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <View style={{width: '50%'}}>
              <RadioButton.Item
                label="12 words"
                value="12"
                position="leading"
              />
              <RadioButton.Item
                label="21 words"
                value="21"
                position="leading"
              />
            </View>
            <View style={{width: '50%'}}>
              <RadioButton.Item
                label="18 words"
                value="18"
                position="leading"
              />
              <RadioButton.Item
                label="24 words"
                value="24"
                position="leading"
              />
            </View>
          </View>
        </RadioButton.Group>
        <View style={styles.paddingStyle} />
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
