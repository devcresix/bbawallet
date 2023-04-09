import React, {ReactNode} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {Portal, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  visible: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

function BlurModal({visible, children, onClose}: Props) {
  const {colors} = useTheme();
  return (
    <Portal>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View
            style={{
              ...styles.modalView,
              backgroundColor: colors.background,
            }}>
            <Icon
              size={25}
              name="close"
              onPress={onClose}
              style={styles.closeIcon}
            />
            <View>{children}</View>
          </View>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modalView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 15,
    paddingBottom: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: {
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});

export default BlurModal;
