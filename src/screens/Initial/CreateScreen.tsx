import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import {useTheme} from '@react-navigation/native';
import {createAccount} from 'prolibbti';
import 'react-native-get-random-values';
import {v1 as uuid} from 'uuid';

import {withTranslation} from '../../hooks/useTranslations';
import {IAccountState} from '../../types';
import {RootState} from '../../store';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';
import useAccounts from '../../hooks/useAccounts';

function CreateScreen({navigation, t}: any) {
  const {colors} = useTheme();
  const {addAccount, setCurrent} = useAccounts();

  const {accounts} = useSelector((state: RootState) => state.session);
  const [account, setAccount] = useState(null as unknown as IAccountState);
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
    const onCreatingAccount = async () => {
      const newAccount = await createAccount(
        uuid(),
        `Account ${accounts.length + 1}`,
      );
      // console.log(newAccount.toAddress());
      setAccount({...newAccount, verified: false});
      setText(newAccount.mnemonic);
    };
    onCreatingAccount();
  }, [accounts]);

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
    height: 120,
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
