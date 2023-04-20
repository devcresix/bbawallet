import React, {useState} from 'react';
// import {StyleSheet, View} from 'react-native';

import {withTranslation} from '../../hooks/useTranslations';

import TextInput from '../../components/Input';
import useAccounts from '../../hooks/useAccounts';
import Button from '../../components/Button';

function TransferScreen({navigation, t}: any) {
  const [destination, setDestination] = useState('');
  const {account} = useAccounts();

  const handlePressScan = () => {
    navigation.push('Camera');
  };

  const handlePressNext = () => {
    console.log('Pressed Next', account);
  };

  return (
    <>
      <TextInput
        label={t('common.destination')}
        variant="outlined"
        margin={2}
        value={destination}
        onChangeText={(text: string) => setDestination(text)}
        right="qrcode-scan"
        rightOnPress={handlePressScan}
      />
      <Button
        mode="contained"
        icon="page-next"
        title={t('common.next')}
        onPress={handlePressNext}
      />
    </>
  );
}

export default withTranslation()(TransferScreen);
