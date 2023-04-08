/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Portal, Text, useTheme} from 'react-native-paper';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';

// Components
import SelectAccounts from '../SelectAccounts';
import {IAccountState} from '../../types';
import useAccounts from '../../hooks/useAccounts';
import {withTranslation} from '../../hooks/useTranslations';

interface INavbarProps {}

function Navbar({}: INavbarProps) {
  const {colors} = useTheme();
  const {current, setCurrent} = useAccounts();

  const [modalVisible, setModalVisible] = useState(false);

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
      <Portal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <BlurView
            style={[
              StyleSheet.absoluteFill,
              {
                padding: 15,
                marginTop: 65,
                borderRadius: 20,
                borderColor: colors.secondary,
              },
            ]}
            blurType="light"
            blurAmount={15}>
            <View>
              <MaterialCommunityIcons
                size={25}
                name="close"
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  alignContent: 'flex-end',
                  alignSelf: 'flex-end',
                }}
              />
              <SelectAccounts
                onPress={handleSelectAccount}
                onCreate={handleCreateAccount}
              />
            </View>
          </BlurView>
        </Modal>
      </Portal>
      <View style={styles.content}>
        <View>
          <Text style={styles.textSwitchAccount}>
            {current.name}
            <MaterialCommunityIcons
              size={20}
              name="chevron-down"
              color={colors.primary}
              onPress={() => setModalVisible(true)}
            />
          </Text>
        </View>
        <MaterialCommunityIcons
          size={24}
          name="swap-horizontal-bold"
          color={colors.primary}
          style={{opacity: 1.0}}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    height: 50,
    marginHorizontal: 15,
    width: Dimensions.get('window').width - 40,
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
