import React from 'react';
import {TextInput as MaterialTextInput} from '@react-native-material/core';

interface IInputProps {
  variant: 'filled' | 'outlined' | 'standard';
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
    <MaterialTextInput
      autoCapitalize="none"
      variant={variant}
      label={label}
      style={{margin: margin}}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
}

export default TextInput;
