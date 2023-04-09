import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

// Components
import SelectAccounts from '../SelectAccounts';
import {IAccountState} from '../../types';
import useAccounts from '../../hooks/useAccounts';
import {withTranslation} from '../../hooks/useTranslations';
import BlurModal from '../BlurModal';
import Button from '../Button';
import SelectNetworks from '../SelectNetworks';

interface INavbarProps {}

function Navbar({}: INavbarProps) {
  const {current, setCurrent} = useAccounts();

  const [modalVisible, setModalVisible] = useState(false);
  const [networksVisible, setNetworksVisible] = useState(false);

  const handleSelectAccount = (account: IAccountState) => {
    setModalVisible(!modalVisible);
    setCurrent(account);
  };

  const handleCreateAccount = () => {
    console.log('Need to create an new acocunt');
    // TODO
  };

  return (
    <View style={[styles.container]}>
      <BlurModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        children={
          <SelectAccounts
            onPress={handleSelectAccount}
            onCreate={handleCreateAccount}
          />
        }
      />
      <BlurModal
        visible={networksVisible}
        onClose={() => setNetworksVisible(false)}
        children={<SelectNetworks onPress={() => {}} />}
      />
      <View style={styles.content}>
        <Button
          icon="chevron-down"
          title={current.name}
          onPress={() => setModalVisible(true)}
          iconRight
        />
        <Button
          icon="swap-horizontal-bold"
          onPress={() => setNetworksVisible(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    zIndex: 10,
    height: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textSwitchAccount: {
    fontWeight: '700',
    alignContent: 'center',
  },
});

export default withTranslation()(Navbar);
