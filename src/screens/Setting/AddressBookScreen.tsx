import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ListItem from '../../components/ListItem';
import {withTranslation} from '../../hooks/useTranslations';

function AddressBookScreen() {
  return (
    <>
      <ListItem
        title="Johny Hammy"
        description="0x473300...f13A33"
        // eslint-disable-next-line react/no-unstable-nested-components
        left={props => (
          <Image
            {...props}
            style={{...styles.leftImage}}
            source={require('../../assets/images/tokens/usdt.png')}
          />
        )}
      />
      <ListItem
        title="Johny Hammy"
        description="0x473300...f13A33"
        // eslint-disable-next-line react/no-unstable-nested-components
        left={props => (
          <Image
            {...props}
            style={{...styles.leftImage}}
            source={require('../../assets/images/tokens/busd.png')}
          />
        )}
      />
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
