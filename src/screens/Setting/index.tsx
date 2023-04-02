/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Dialog} from '@react-native-material/core';

import {resetDevice} from '../../features/appSlice';
import storageKeys from '../../config/storageKeys';
import storage from '../../utils/storage';

// Components
import GlobalText from '../../components/Global/GlobalText';
import CardButton from '../../components/Card/CardButton';
import Layout from '../../components/Layout';
import SimpleDialog from '../../components/Dialog';

// const styles = StyleSheet.create({
//   appVersion: {
//     position: 'absolute',
//     bottom: 8,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//   },
// });

function SettingScreen() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  async function handlePressReset() {
    setVisible(true);
  }

  async function handleResetDevice() {
    await storage.removeItem(storageKeys.SESSION_KEY);
    dispatch(resetDevice());
  }

  return (
    <Layout>
      <>
        <>
          <CardButton
            title="Address Book"
            actionIcon="right"
            image={require('../../assets/images/icons/address-book.png')}
            onPress={() => {}}>
            <GlobalText type="caption">Address Book</GlobalText>
          </CardButton>
          <CardButton title="Language" actionIcon="right" onPress={() => {}}>
            <GlobalText type="caption">English</GlobalText>
          </CardButton>
          <CardButton title="Network" actionIcon="right" onPress={() => {}}>
            <GlobalText type="caption">mainnet</GlobalText>
          </CardButton>
          <CardButton
            title="Trusted Apps"
            actionIcon="right"
            onPress={() => {}}
          />
          <CardButton title="Support" actionIcon="right" onPress={() => {}} />
          <CardButton title="About Us" actionIcon="right" onPress={() => {}} />
          <CardButton
            title="Reset Device"
            actionIcon="right"
            onPress={handlePressReset}
          />
          <SimpleDialog
            visible={visible}
            title={'Reset Device'}
            text={'Do you want to reset current device?'}
            onPressCancel={() => setVisible(false)}
            onPressOk={handleResetDevice}
          />
        </>
      </>
    </Layout>
  );
}

export default SettingScreen;
