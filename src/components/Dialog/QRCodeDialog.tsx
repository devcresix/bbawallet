/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

import {withTranslation} from '../../hooks/useTranslations';

interface IInputProps {
  visible: boolean;
  type?: 'info' | 'warning' | 'danger';
  title: string;
  value: string;
  onPressClose: () => void;
  t: any;
}

function QRCodeDialog({
  visible,
  type,
  title,
  value,
  onPressClose,
  t,
}: IInputProps) {
  const typeStyle =
    type === 'warning'
      ? styles.dialogWarning
      : type === 'danger'
      ? styles.dialogDanger
      : styles.dialogInfo;

  function handlePressCopy() {
    Snackbar.show({
      text: t('common.copied'),
      duration: Snackbar.LENGTH_LONG,
    });
    Clipboard.setString(value);
  }

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onPressClose}
        style={[styles.dialog, typeStyle]}>
        <Dialog.Title style={{textAlign: 'center'}}>{title}</Dialog.Title>
        <Dialog.Content style={{alignItems: 'center'}}>
          <QRCode
            size={250}
            value={value}
            // logoSize={100}
            // logoBorderRadius={15}
            // backgroundColor="white"
          />
          <Text style={{marginTop: 30}}>{value}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onPressClose}>
            <Text>{t('common.close')}</Text>
          </Button>
          <Button
            onPress={() => {
              handlePressCopy();
            }}>
            <Text>{t('common.copy')}</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialog: {
    borderWidth: 2,
    borderRadius: 25,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  dialogInfo: {},
  dialogWarning: {
    borderColor: '#EDAE49',
    backgroundColor: '#EDAE49',
  },
  dialogDanger: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
});

export default withTranslation()(QRCodeDialog);
