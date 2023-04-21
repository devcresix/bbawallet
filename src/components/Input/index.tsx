import React from 'react';
import {TextInput as PaperTextInput} from 'react-native-paper';

interface IInputProps {
  variant: 'flat' | 'outlined';
  margin: number;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  right?: string;
  rightOnPress?: () => void;
}

function TextInput({
  variant,
  margin,
  label,
  value,
  onChangeText,
  onBlur,
  right,
  rightOnPress,
}: IInputProps) {
  return (
    <PaperTextInput
      mode={variant}
      label={label}
      style={{margin: margin}}
      autoCapitalize="none"
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      right={
        right ? (
          <PaperTextInput.Icon icon={right} onPress={rightOnPress} />
        ) : (
          <></>
        )
      }
    />
  );
}

export default TextInput;
