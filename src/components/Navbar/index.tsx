/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';

// Components
import SelectAccounts from '../SelectAccounts';

/**
 * @param _children
 * @param style {object}
 * @param rightButton {React.ComponentElement}
 * @returns {*}
 * @constructor
 */
function Navbar({_children, style, rightButton}: any): any {
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
              marginTop: 100,
              borderRadius: 50,
              padding: 15,
            },
          ]}
          blurType="light"
          blurAmount={10}>
          <View
            style={{
              // width: '100%',
              alignContent: 'flex-end',
              alignSelf: 'flex-end',
              backgroundColor: 'gray',
            }}>
            <MaterialCommunityIcons
              size={30}
              name="close"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <SelectAccounts />
        </BlurView>
      </Modal>
      <View style={styles.content}>
        <MaterialCommunityIcons
          size={30}
          name="account-circle-outline"
          color={colors.primary}
          style={{opacity: 0.5}}
          onPress={() => setModalVisible(true)}
        />
        {rightButton}
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
});

export default Navbar;
