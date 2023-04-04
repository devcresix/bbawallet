/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Appbar, Text, useTheme} from 'react-native-paper';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';

// Components
import SelectAccounts from '../SelectAccounts';

function Navbar({navigation, back}: any): any {
  const [modalVisible, setModalVisible] = useState(false);
  const {colors} = useTheme();

  return (
    <Appbar.Header style={styles.appBarHeader}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <View style={[styles.container]}>
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
                borderRadius: 18,
                backgroundColor: 'gray',
              },
            ]}
            blurType="light"
            blurAmount={10}>
            <View>
              <MaterialCommunityIcons
                size={30}
                name="close"
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  alignContent: 'flex-end',
                  alignSelf: 'flex-end',
                }}
              />
            </View>
            <SelectAccounts />
          </BlurView>
        </Modal>
        <View style={styles.content}>
          <Ionicons
            size={24}
            name="settings"
            color={colors.primary}
            style={{opacity: 1.0}}
            onPress={() => setModalVisible(true)}
          />
          <View>
            <Text style={styles.textSwitchAccount}>
              Account 1
              <MaterialCommunityIcons
                size={20}
                name="chevron-down"
                color={colors.primary}
                onPress={() => {}}
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
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBarHeader: {
    height: 50,
  },
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

export default Navbar;
