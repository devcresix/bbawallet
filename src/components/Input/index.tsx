import React from 'react';
import {TextInput as PaperTextInput} from 'react-native-paper';

interface IInputProps {
  variant: 'flat' | 'outlined';
  margin: number;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
}

function TextInput({
  variant,
  margin,
  label,
  value,
  onChangeText,
  onBlur,
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
    />
  );
}

export default TextInput;
