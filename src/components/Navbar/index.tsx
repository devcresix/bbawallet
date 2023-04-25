import React, {useState} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {INetwork, IMasterKey, DefaultNetwork} from '@bbachain/masterkey';

// Components
import SelectAccounts from '../SelectAccounts';
import SelectNetworks from '../SelectNetworks';
import BlurModal from '../BlurModal';
import Button from '../Button';

// Utils
import useMasterKey from '../../hooks/useMasterKey';
import useNetworks from '../../hooks/useNetworks';
import {withTranslation} from '../../hooks/useTranslations';

interface INavbarProps {}

function Navbar({}: INavbarProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {colors} = useTheme();
  const {currentKey, setCurrentKey} = useMasterKey();
  const {network, setNetwork} = useNetworks();

  const [modalVisible, setModalVisible] = useState(false);
  const [networksVisible, setNetworksVisible] = useState(false);

  const handleSelectAccount = (account: IMasterKey) => {
    setModalVisible(false);
    setCurrentKey(account);
  };

  const handleCreateAccount = () => {
    console.log('Need to create an new acocunt');
    // TODO
  };

  const handleSelectNetwork = (n: INetwork) => {
    setNetworksVisible(false);
    setNetwork(n);
  };

  const containerPlatform =
    Platform.OS === 'ios' ? styles.containerIOS : styles.containerAndroid;

  return (
    <View
      style={{
        ...styles.container,
        ...containerPlatform,
        // backgroundColor: colors.tertiaryContainer,
      }}>
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
        children={<SelectNetworks onPress={handleSelectNetwork} />}
      />
      <View style={styles.content}>
        <Button
          icon="chevron-down"
          title={currentKey ? currentKey.name : ''}
          onPress={() => setModalVisible(true)}
          iconRight
        />
        <Button
          icon="swap-horizontal-bold"
          title={network ? network.symbol : DefaultNetwork.symbol}
          onPress={() => setNetworksVisible(true)}
          iconRight
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    zIndex: 10,
    height: 40,
    marginTop: 6,
  },
  containerIOS: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
  },
  containerAndroid: {},
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
