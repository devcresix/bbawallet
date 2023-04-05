/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Dialog, Paragraph, Portal, Text} from 'react-native-paper';
import {withTranslation} from '../../hooks/useTranslations';

interface IInputProps {
  visible: boolean;
  title: string;
  text: string;
  onPressOk: () => void;
  onPressCancel: () => void;
  t: any;
}

function SimpleDialog({
  visible,
  title,
  text,
  onPressCancel,
  onPressOk,
  t,
}: IInputProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onPressCancel}>
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

export default withTranslation()(SimpleDialog);
