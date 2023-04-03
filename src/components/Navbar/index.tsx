/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, useTheme} from 'react-native-paper';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';

// Components
import SelectAccounts from '../SelectAccounts';

/**
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function Navbar({style}: any): any {
  const [modalVisible, setModalVisible] = useState(false);
  // const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {colors} = useTheme();

  return (
    <View style={[StyleSheet.absoluteFill, styles.container, style]}>
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
          style={{opacity: 0.5}}
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
          style={{opacity: 0.5}}
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
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 30,
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
