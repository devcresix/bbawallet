import React, {useEffect, useState} from 'react';

import TextInput from '../../components/Input';
import Button from '../../components/Button';

import {withTranslation} from '../../hooks/useTranslations';
import useAccounts from '../../hooks/useAccounts';

function AmountScreen({route, _navigation, t}: any) {
  const {destination} = route.params;
  const {account} = useAccounts();
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('0');

  useEffect(() => {
    if (destination) {
      setReceiver(destination);
    }
  }, [destination]);

  const handlePressNext = () => {};
  const handlePressMax = async () => {
    const balance = await account.getBalance();
    console.log('Loaded Max Amount:', balance);
  };

  return (
    <>
      <TextInput
        label={t('common.address')}
        variant="outlined"
        margin={2}
        value={receiver}
        onChangeText={() => {}}
      />
      <TextInput
        label={t('common.amount')}
        variant="outlined"
        margin={2}
        value={amount}
        onChangeText={setAmount}
        right="check-all"
        rightOnPress={handlePressMax}
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

export default withTranslation()(AmountScreen);
