/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ListItem, Stack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {resetDevice} from '../../features/appSlice';
import storageKeys from '../../config/storageKeys';
import storage from '../../utils/storage';

// Components
import SimpleDialog from '../../components/Dialog';
import Layout from '../../components/Layout';

// Utils
import {withTranslation} from '../../hooks/useTranslations';

function SettingScreen({navigation, t}: any) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  async function handlePressReset() {
    setVisible(true);
  }

  async function handleResetDevice() {
    await storage.removeItem(storageKeys.SESSION_KEY);
    dispatch(resetDevice());
  }

  function handlePressSetting(page: string) {
    navigation.push(page);
  }

  return (
    <Layout>
      <Stack>
        <ListItem
          title={t('settings.address-book')}
          leading={<Icon name="book-account" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={() => handlePressSetting('AddressBook')}
        />
        <ListItem
          title={t('settings.languages')}
          leading={<Icon name="translate" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={() => handlePressSetting('Language')}
        />
        {/* <ListItem
          title={t('settings.trusted-apps')}
          leading={<Icon name="apps" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        /> */}
        <ListItem
          title={t('settings.about-and-support')}
          leading={<Icon name="information" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={() => handlePressSetting('About')}
        />
        <ListItem
          title={t('settings.reset-all')}
          leading={<Icon name="lock-reset" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={handlePressReset}
        />
        <SimpleDialog
          visible={visible}
          type="warning"
          title={t('settings.reset-all')}
          text={t('settings.confirm-reset')}
          onPressCancel={() => setVisible(false)}
          onPressOk={handleResetDevice}
        />
      </Stack>
    </Layout>
  );
}

export default withTranslation()(SettingScreen);
