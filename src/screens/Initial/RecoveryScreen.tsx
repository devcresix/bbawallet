import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {recovery} from '@bbachain/masterkey';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

// Components
import Button from '../../components/Button';
import InitLayout from '../../components/Layout/InitLayout';
import {withTranslation} from '../../hooks/useTranslations';
import useMasterKey from '../../hooks/useMasterKey';
import storage from '../../utils/storage';
import storageKeys from '../../config/storageKeys';
import {setInitialized} from '../../store/appSlice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RecoveryScreen({navigation, t}: any) {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const {currentKey, masterKeys, addMasterKey, setCurrentKey, verifyMasterKey} =
    useMasterKey();
  const [text, setText] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (processing) {
      recovery(`Key ${masterKeys.length + 1}`, text).then(newKey => {
        setProcessing(false);
        if (newKey === null) {
          return Snackbar.show({
            text: t('recovery-screen.incorrect'),
            duration: Snackbar.LENGTH_LONG,
          });
        }

        addMasterKey(newKey);
        setCurrentKey(newKey);
        verifyMasterKey(currentKey);
        storage.setItem(storageKeys.INITIALIZED, true).then(() => {
          dispatch(setInitialized(true));
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processing]);

  async function handleClickStart() {
    setProcessing(true);
    const isValid = validateMnemonic(text.trim());
    if (!isValid) {
      return;
    }
  }

  const handleTextChange = (tx: string) => {
    setText(tx);
    setProcessing(false);
  };

  const handlePasteEvent = async () => {
    const pasted = await Clipboard.getString();
    if (pasted === '') {
      return;
    }

    if (validateMnemonic(pasted)) {
      setText(pasted.trim());
      setProcessing(false);
    }
  };

  const validateMnemonic = (mnemonic: string) => {
    const wordsCount = mnemonic.split(' ').length || 0;
    return [12, 15, 18, 21, 24].indexOf(wordsCount) !== -1;
  };

  return (
    <InitLayout>
      <Text style={styles.titleStyles}>{t('recovery-screen.title')}</Text>
      <View style={styles.paddingStyle} />
      <View style={styles.viewWarningStyle}>
        <Text
          style={{
            ...styles.textWarningStyle,
            color: colors.text,
          }}>
          {t('recovery-screen.description')}
        </Text>
        <TextInput
          value={text}
          placeholder={t('recovery-screen.title')}
          style={styles.inputSeedStyle}
          contentStyle={styles.inputSeedContentStyle}
          onChangeText={handleTextChange}
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
          title={t('common.paste')}
          onPress={handlePasteEvent}
        />
        <View style={styles.paddingStyle} />
        <Button
          mode="contained"
          icon="skip-next"
          title={t('common.next')}
          loading={processing}
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

export default withTranslation()(RecoveryScreen);
