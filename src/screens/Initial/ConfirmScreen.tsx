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
import {withTranslation} from '../../hooks/useTranslations';

function ConfirmScreen({navigation, t}: any) {
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
        text: t('confirm-screen.incorrect'),
        duration: Snackbar.LENGTH_LONG,
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
      <Text style={styles.titleStyles}>{t('confirm-screen.title')}</Text>
      <View style={styles.paddingStyle} />
      <View style={styles.viewWarningStyle}>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          {t('confirm-screen.description')}
        </Text>
      </View>
      <View style={styles.paddingStyle} />
      <View style={styles.paddingStyle} />

      <View style={styles.confirmSeed}>
        <TextInput
          label={t('common.key', {
            key: key1 + 1,
          })}
          variant="outlined"
          margin={2}
          value={seed1}
          onChangeText={(text: string) => onChangeSeed1(text)}
        />
        <TextInput
          label={t('common.key', {
            key: key2 + 1,
          })}
          variant="outlined"
          margin={2}
          value={seed2}
          onChangeText={(text: string) => onChangeSeed2(text)}
        />
        <TextInput
          label={t('common.key', {
            key: key3 + 1,
          })}
          variant="outlined"
          margin={2}
          value={seed3}
          onChangeText={(text: string) => onChangeSeed3(text)}
        />
      </View>

      <View style={styles.optionsStyle}>
        <Button
          icon="shield-check"
          title={t('common.confirm')}
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
  textWarningStyle: {
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

export default withTranslation()(ConfirmScreen);
