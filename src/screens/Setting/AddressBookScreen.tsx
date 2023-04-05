import React from 'react';
import {SafeAreaView} from 'react-native';
import {Avatar, ListItem, Stack} from '@react-native-material/core';

function AddressBookScreen() {
  return (
    <SafeAreaView>
      <Stack>
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar image={require('../../assets/images/tokens/eth.png')} />
          }
          title="Johny Hammy"
          secondaryText="0x473300...f13A33"
        />
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar image={require('../../assets/images/tokens/usdt.png')} />
          }
          title="Johny Hammy"
          secondaryText="0x473300...f13A33"
        />
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar image={require('../../assets/images/tokens/busd.png')} />
          }
          title="Johny Hammy"
          secondaryText="0x473300...f13A33"
        />
      </Stack>
    </SafeAreaView>
  );
}

export default AddressBookScreen;
