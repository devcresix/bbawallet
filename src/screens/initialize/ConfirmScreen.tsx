import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';

import {setSession} from '../../features/appSlice';
import {RootState} from '../../store';
import storage from '../../utils/storage';
import storageKeys from '../../config/storageKeys';
import TextInput from '../../components/Input';

function ConfirmScreen({navigation}: any): JSX.Element {
  const dispatch = useDispatch();

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
        </View>
        <View style={styles.paddingStyle} />
        <View style={styles.paddingStyle} />

        <View style={styles.confirmSeed}>
          <TextInput label="Seed Key #1" variant="outlined" margin={16} />
          <TextInput label="Seed Key #4" variant="outlined" margin={16} />
          <TextInput label="Seed Key #6" variant="outlined" margin={16} />
        </View>

        <View style={styles.optionsStyle}>
          <Button
            icon="play"
            mode="contained"
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
  optionButtonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  // TODO
  confirmSeed: {
    width: '92%',
  },
});

export default ConfirmScreen;
