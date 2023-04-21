import React, {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';

import TextInput from '../../components/Input';
import Button from '../../components/Button';

import {withTranslation} from '../../hooks/useTranslations';
import useAccounts from '../../hooks/useAccounts';
import useNetworks from '../../hooks/useNetworks';

function AmountScreen({route, navigation, t}: any) {
  const {destination} = route.params;
  const {network} = useNetworks();
  const {account} = useAccounts();
  const [receiver, setReceiver] = useState('');
  const [balance, setBalance] = useState('0');
  const [amount, setAmount] = useState('0');

  useEffect(() => {
    if (destination) {
      setReceiver(destination);
      account.getBalance().then(bal => setBalance(`${bal}`));
    }
  }, [account, destination]);

  const handlePressMax = async () => {
    const estimated = await account.estimateMaxTransfer(receiver);
    setAmount(`${estimated}`);
  };

  const handlePressNext = async () => {
    try {
      const transaction = await account.createTransaction(
        receiver,
        parseFloat(amount),
      );
      const txid = await account.sendTransaction(transaction);
      console.log(txid);
      navigation.push('Home');
    } catch (error) {
      console.log(error);
    }
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
      <Text>
        Available: {balance} {network.symbol}
      </Text>
      {/* <Text>
        Network Fee: {balance} {network.symbol}
      </Text> */}

      <Button
        mode="contained"
        icon="page-next"
        title={t('common.sign')}
        onPress={handlePressNext}
      />
    </>
  );
}

export default withTranslation()(AmountScreen);
