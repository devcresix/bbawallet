import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ListItem from '../../components/ListItem';
import EmptyComponent from '../../components/EmptyComponent';

import {withTranslation} from '../../hooks/useTranslations';
import useAddressBook from '../../hooks/useAddressBook';
import {IAddress} from '../../types';

function AddressBookScreen() {
  const {addresses, delAddress} = useAddressBook();

  function handleDelAddress(ad: IAddress) {
    delAddress(ad);
  }

  return (
    <>
      {addresses.length === 0 ? <EmptyComponent /> : null}
      {addresses.map((ad, i) => (
        <ListItem
          key={i}
          title={ad.name}
          description={ad.address}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={props =>
            ad.image ? (
              <Image
                {...props}
                style={{...styles.leftImage}}
                source={ad.image}
              />
            ) : null
          }
          // eslint-disable-next-line react/no-unstable-nested-components
          right={props => (
            <Icon
              {...props}
              size={25}
              name="trash-can"
              onPress={() => handleDelAddress(ad)}
            />
          )}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  leftImage: {
    margin: 8,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTranslation()(AddressBookScreen);
