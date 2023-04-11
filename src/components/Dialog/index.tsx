/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Paragraph, Portal, Text} from 'react-native-paper';
import {withTranslation} from '../../hooks/useTranslations';

interface IInputProps {
  visible: boolean;
  type?: 'info' | 'warning' | 'danger';
  title: string;
  text: string;
  onPressOk: () => void;
  onPressCancel: () => void;
  t: any;
}

function SimpleDialog({
  visible,
  type,
  title,
  text,
  onPressCancel,
  onPressOk,
  t,
}: IInputProps) {
  const typeStyle =
    type === 'warning'
      ? styles.dialogWarning
      : type === 'danger'
      ? styles.dialogDanger
      : styles.dialogInfo;
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onPressCancel}
        style={[styles.dialog, typeStyle]}>
        <Dialog.Title style={{textAlign: 'center'}}>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph style={{textAlign: 'center'}}>{text}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onPressCancel}>
            <Text>{t('simple-dialog.cancel')}</Text>
          </Button>
          <Button
            onPress={() => {
              onPressCancel();
              onPressOk();
            }}>
            <Text>{t('simple-dialog.ok')}</Text>
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

export default withTranslation()(SimpleDialog);
