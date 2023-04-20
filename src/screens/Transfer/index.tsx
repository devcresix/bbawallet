import React, {useState} from 'react';

import TextInput from '../../components/Input';
import Button from '../../components/Button';
import ScanQR from '../../components/ScanQR';

import useAccounts from '../../hooks/useAccounts';
import {withTranslation} from '../../hooks/useTranslations';

function TransferScreen({navigation, t}: any) {
  const [enableScan, setEnableScan] = useState(false);
  const [destination, setDestination] = useState('');
  const {account} = useAccounts();

  const handlePressScan = () => {
    setEnableScan(true);
  };

  const handleDetected = (detected: string) => {
    const addr = detected.trim();
    if (validateDestination(addr)) {
      setDestination(addr);
      setEnableScan(false);
    }
  };

  const handleChangeText = (text: string) => {
    setDestination(text.trim());
  };

  const validateDestination = (address: string) => {
    try {
      return account.validateAddress(address);
    } catch (error) {
      return false;
    }
  };

  const handlePressNext = () => {
    navigation.push('Amount', {
      destination: destination,
    });
  };

  return (
    <>
      {enableScan ? (
        <ScanQR onDetected={handleDetected} />
      ) : (
        <>
          <TextInput
            label={t('common.destination')}
            variant="outlined"
            margin={2}
            value={destination}
            onChangeText={handleChangeText}
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
      )}
    </>
  );
}

export default withTranslation()(TransferScreen);
