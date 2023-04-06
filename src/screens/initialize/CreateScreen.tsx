import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {createAccount} from 'prolibbti';

import 'react-native-get-random-values';
import {v1 as uuid} from 'uuid';

import {setSession} from '../../features/appSlice';
import {RootState} from '../../store';
import storage from '../../utils/storage';
import storageKeys from '../../config/storageKeys';

// Components
import StatusBanner from '../../components/StatusBanner';
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';

function CreateScreen({navigation}: any) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState('');
  const [text, setText] = useState('');

  const {session} = useSelector((state: RootState) => state.app);

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
    setStatus('Data copied to clipboard');
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
        <Text style={styles.titleStyles}>Your Seed Phrase</Text>
        <View style={styles.paddingStyle} />
        <View style={styles.viewWarningStyle}>
          <Text style={styles.textWarningStyle}>
            You will need these words to restore your wallet if your browser's
            storage is cleared or your device is damaged or lost.
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
            title="Copy Seeds"
            onPress={handleClickCopy}
          />
          <View style={styles.paddingStyle} />
          <Button icon="play" title="Start" onPress={handleClickStart} />
        </View>
      </InitLayout>
      <StatusBanner message={status} onDismiss={() => setStatus('')} />
    </>
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
  viewSeedPhraseStyle: {
    marginLeft: 0,
    marginRight: 0,
    height: 40,
  },
  textWarningStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
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

export default CreateScreen;
