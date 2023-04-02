/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Dialog, Paragraph, Portal, Text} from 'react-native-paper';

interface IInputProps {
  visible: boolean;
  title: string;
  text: string;
  onPressOk: () => void;
  onPressCancel: () => void;
}

function SimpleDialog({
  visible,
  title,
  text,
  onPressCancel,
  onPressOk,
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
            <Text>Cancel</Text>
          </Button>
          <Button
            onPress={() => {
              onPressCancel();
              onPressOk();
            }}>
            <Text>Ok</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

export default SimpleDialog;
