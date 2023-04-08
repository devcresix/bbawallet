/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {setInitialized, setLoaded} from '../../store/appSlice';
import storageKeys from '../../config/storageKeys';
import storage from '../../utils/storage';

// Components
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';
import SimpleDialog from '../../components/Dialog';

// Utils
import {withTranslation} from '../../hooks/useTranslations';
import {setAccounts} from '../../store/sessionSlice';

function SettingScreen({navigation, t}: any) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  async function handlePressReset() {
    setVisible(true);
  }

  async function handleResetDevice() {
    await Promise.all([
      await storage.removeItem(storageKeys.ACCOUNTS),
      await storage.removeItem(storageKeys.CURRENT_ACCOUNT),
      await storage.removeItem(storageKeys.INITIALIZED),
    ]);
    dispatch(setAccounts([]));
    dispatch(setInitialized(false));
    dispatch(setLoaded(false));
  }

  function handlePressSetting(page: string) {
    navigation.push(page);
  }

  return (
    <Layout>
      <ListItem
        title={t('settings.address-book')}
        left={props => <Icon {...props} name="book-account" />}
        right={props => <Icon {...props} name="chevron-right" />}
        onPress={() => handlePressSetting('AddressBook')}
      />
      <ListItem
        title={t('settings.languages')}
        left={props => <Icon {...props} name="translate" />}
        right={props => <Icon {...props} name="chevron-right" />}
        onPress={() => handlePressSetting('Language')}
      />
      <ListItem
        title={t('settings.trusted-apps')}
        left={props => <Icon {...props} name="apps" />}
        right={props => <Icon {...props} name="chevron-right" />}
      />
      <ListItem
        title={t('settings.theme')}
        left={props => <Icon {...props} name="theme-light-dark" />}
        right={props => <Icon {...props} name="chevron-right" />}
        onPress={() => handlePressSetting('Theme')}
      />
      <ListItem
        title={t('settings.about-and-support')}
        left={props => <Icon {...props} name="information" />}
        right={props => <Icon {...props} name="chevron-right" />}
        onPress={() => handlePressSetting('About')}
      />
      <ListItem
        title={t('settings.reset-all')}
        left={props => <Icon {...props} name="lock-reset" />}
        right={props => <Icon {...props} name="chevron-right" />}
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
    </Layout>
  );
}

export default withTranslation()(SettingScreen);
