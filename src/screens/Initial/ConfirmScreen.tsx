import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

import {setSession} from '../../store/appSlice';
import {RootState} from '../../store';
import storage from '../../utils/storage';
import storageKeys from '../../config/storageKeys';
import TextInput from '../../components/Input';
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';

function ConfirmScreen({navigation}: any) {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const {session} = useSelector((state: RootState) => state.app);

  const [seeds, setSeeds] = useState([] as string[]);

  const [key1, setKey1] = useState(0);
  const [key2, setKey2] = useState(0);
  const [key3, setKey3] = useState(0);

  const [seed1, onChangeSeed1] = useState('');
  const [seed2, onChangeSeed2] = useState('');
  const [seed3, onChangeSeed3] = useState('');

  function saveSeedState() {
    const preSession = {
      ...session,
      ...{validated: true},
    };
    storage.setItem(storageKeys.SESSION_KEY, preSession).then(() => {
      dispatch(setSession(preSession));
    });
    navigation.push('Create');
  }

  function handleClickStart() {
    if (
      seed1 !== seeds[key1] ||
      seed2 !== seeds[key2] ||
      seed3 !== seeds[key3]
    ) {
      return Snackbar.show({
        text: 'Incorrect recovery seed verification',
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Close',
          textColor: 'orange',
          onPress: () => {},
        },
      });
    }

    // On success validate
    saveSeedState();
  }

  function getRandom(items: string[]) {
    const randomIndex = [];
    for (let index = 0; index < 3; index++) {
      let randNum = Math.floor(Math.random() * items.length);
      while (randomIndex.find(e => e === randNum) !== undefined) {
        randNum = Math.floor(Math.random() * items.length);
      }
      randomIndex.push(randNum);
    }
    return randomIndex.sort((a, b) => a - b);
  }

  useEffect(() => {
    if (session.mnemonic) {
      const items = session.mnemonic.split(' ');
      setSeeds(items);
      const random = getRandom(items);

      setKey1(random[0]);
      setKey2(random[1]);
      setKey3(random[2]);
    }
  }, [session.mnemonic]);

  return (
    <InitLayout>
      <Text style={styles.titleStyles}>Your Seed Phrase</Text>
      <View style={styles.paddingStyle} />
      <View style={styles.viewWarningStyle}>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          You will need these words to restore your wallet if your browser's
          storage is cleared or your device is damaged or lost.
        </Text>
      </View>
      <View style={styles.paddingStyle} />
      <View style={styles.paddingStyle} />

      <View style={styles.confirmSeed}>
        <TextInput
          label={`Key #${key1 + 1}`}
          variant="outlined"
          margin={2}
          value={seed1}
          onChangeText={(text: string) => onChangeSeed1(text)}
        />
        <TextInput
          label={`Key #${key2 + 1}`}
          variant="outlined"
          margin={2}
          value={seed2}
          onChangeText={(text: string) => onChangeSeed2(text)}
        />
        <TextInput
          label={`Key #${key3 + 1}`}
          variant="outlined"
          margin={2}
          value={seed3}
          onChangeText={(text: string) => onChangeSeed3(text)}
        />
      </View>

      <View style={styles.optionsStyle}>
        <Button icon="play" title="Start" onPress={handleClickStart} />
      </View>
    </InitLayout>
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
  textWarningStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsStyle: {
    justifyContent: 'center',
    width: '100%',
    padding: 25,
  },
  confirmSeed: {
    width: '92%',
  },
});

export default ConfirmScreen;
