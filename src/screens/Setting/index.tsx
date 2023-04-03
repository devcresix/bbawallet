/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {resetDevice} from '../../features/appSlice';
import storageKeys from '../../config/storageKeys';
import storage from '../../utils/storage';

// Components
import SimpleDialog from '../../components/Dialog';

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

  function handleAddressBook() {
    console.log('Pressed');
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <ListItem
          title="Address Book"
          leading={<Icon name="book-account" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={handleAddressBook}
        />
        <ListItem
          title="Language"
          leading={<Icon name="translate" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Trusted Apps"
          leading={<Icon name="apps" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="About Us"
          leading={<Icon name="information" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Support"
          leading={<Icon name="help-circle" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Reset All"
          leading={<Icon name="lock-reset" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={handlePressReset}
        />
        <SimpleDialog
          visible={visible}
          title={'Reset Device'}
          text={'Do you want to reset current device?'}
          onPressCancel={() => setVisible(false)}
          onPressOk={handleResetDevice}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingScreen;
