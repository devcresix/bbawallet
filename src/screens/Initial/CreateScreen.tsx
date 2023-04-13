import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import {useTheme} from '@react-navigation/native';
import {IMasterKey, create} from '@bbachain/prolibbti';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';
import useAccounts from '../../hooks/useAccounts';
import {withTranslation} from '../../hooks/useTranslations';

function CreateScreen({route, navigation, t}: any) {
  const {words} = route.params;
  const {colors} = useTheme();
  const {accounts, addAccount, setCurrent} = useAccounts();

  const [account, setAccount] = useState(null as unknown as IMasterKey);
  const [text, setText] = useState('');

  function handleClickStart() {
    addAccount(account);
    setCurrent(account);
    navigation.push('Confirm');
  }

  function handleClickCopy(): void {
    Snackbar.show({
      text: t('create-screen.seeds-copied'),
      duration: Snackbar.LENGTH_LONG,
    });
    Clipboard.setString(account.mnemonic);
  }

  useEffect(() => {
    if (!account) {
      create(`Master Key ${accounts.length + 1}`, words).then(newAccount => {
        setAccount(newAccount);
        setText(newAccount.mnemonic);
      });
    }
  });

  return (
    <InitLayout>
      <Text style={styles.titleStyles}>{t('create-screen.title')}</Text>
      <View style={styles.paddingStyle} />
      <View style={styles.viewWarningStyle}>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          {t('create-screen.description')}
        </Text>
        <TextInput
          value={text}
          style={styles.inputSeedStyle}
          contentStyle={styles.inputSeedContentStyle}
          editable={false}
          inputMode="text"
          mode="outlined"
          multiline
        />
      </View>
      <View style={styles.paddingStyle} />
      <View style={styles.paddingStyle} />
      {text !== '' ? (
        <>
          <View style={styles.optionsStyle}>
            <Button
              mode="contained"
              icon="content-copy"
              title={t('create-screen.copy')}
              onPress={handleClickCopy}
            />
            <View style={styles.paddingStyle} />
            <Button
              mode="contained"
              icon="skip-next"
              title={t('create-screen.next')}
              onPress={handleClickStart}
            />
          </View>
        </>
      ) : (
        <ActivityIndicator animating={true} color={colors.primary} />
      )}
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
  viewSeedPhraseStyle: {
    marginLeft: 0,
    marginRight: 0,
    height: 40,
  },
  textWarningStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputSeedStyle: {
    height: 140,
  },
  inputSeedContentStyle: {
    alignContent: 'center',
  },
  optionsStyle: {
    justifyContent: 'center',
    width: '100%',
    padding: 25,
  },
});

export default withTranslation()(CreateScreen);
