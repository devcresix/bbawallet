import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import {createAccount} from 'prolibbti';

import 'react-native-get-random-values';
import {v1 as uuid} from 'uuid';

import {setSession} from '../../features/appSlice';
import {RootState} from '../../store';
import storage from '../../utils/storage';
import storageKeys from '../../config/storageKeys';

function CreateScreen({navigation}: any): JSX.Element {
  const dispatch = useDispatch();

  const [copied, setCopied] = React.useState(false);
  const [text, _setText] = React.useState('');

  const {session} = useSelector((state: RootState) => state.app);

  function handleClickStart() {
    const preSession = {
      ...session,
      ...{basicsDone: true},
    };
    storage.setItem(storageKeys.SESSION_KEY, preSession).then(() => {
      dispatch(setSession(preSession));
    });
    navigation.push('Welcome');
  }

  function handleClickCopy(): void {
    setCopied(true);
    Snackbar.show({
      text: 'COPIED DATA TO CLIPBOARD',
      duration: Snackbar.LENGTH_LONG,
      action: {
        text: 'Close',
        textColor: 'green',
        onPress: () => {},
      },
    });
  }

  useEffect(() => {
    try {
      const account = createAccount(uuid(), 'Account');
      console.log(account);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.viewStyles}>
      <View style={styles.containerStyles}>
        <Image
          style={styles.logoStyle}
          resizeMode="contain"
          source={require('../../assets/images/Logo.png')}
        />
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
            mode="contained"
            onPress={() => handleClickCopy()}>
            <Text style={styles.optionButtonTextStyle}>Copy Seeds</Text>
          </Button>
          <View style={styles.paddingStyle} />
          <Button
            icon="play"
            mode="contained"
            disabled={!copied}
            onPress={() => handleClickStart()}>
            <Text style={styles.optionButtonTextStyle}>Start</Text>
          </Button>
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
    height: 135,
    width: '100%',
  },
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
  optionButtonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateScreen;
