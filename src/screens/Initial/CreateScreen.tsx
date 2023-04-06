import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import {useTheme} from '@react-navigation/native';
import {createAccount} from 'prolibbti';

import 'react-native-get-random-values';
import {v1 as uuid} from 'uuid';

import {setSession} from '../../store/appSlice';
import {RootState} from '../../store';
import storage from '../../utils/storage';
import storageKeys from '../../config/storageKeys';
import {withTranslation} from '../../hooks/useTranslations';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';

function CreateScreen({navigation, t}: any) {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const {session} = useSelector((state: RootState) => state.app);
  const [text, setText] = useState('');

  function handleClickStart() {
    const preSession = {
      ...session,
      ...{mnemonic: text, validated: false},
    };
    storage.setItem(storageKeys.SESSION_KEY, preSession).then(() => {
      dispatch(setSession(preSession));
    });
    navigation.push('Confirm');
  }

  function handleClickCopy(): void {
    Snackbar.show({
      text: t('create-screen.seeds-copied'),
      duration: Snackbar.LENGTH_LONG,
    });
    Clipboard.setString(text);
  }

  useEffect(() => {
    const onCreatingAccount = async () => {
      const account = await createAccount(uuid(), 'Account');
      setText(account.mnemonic.toLowerCase());
    };
    onCreatingAccount();
  }, []);

  return (
    <>
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
            icon="content-copy"
            title={t('create-screen.copy')}
            onPress={handleClickCopy}
          />
          <View style={styles.paddingStyle} />
          <Button
            icon="skip-next"
            title={t('create-screen.next')}
            onPress={handleClickStart}
          />
        </View>
      </InitLayout>
    </>
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
