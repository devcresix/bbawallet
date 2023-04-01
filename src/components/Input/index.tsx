import React from 'react';
import {TextInput as MaterialTextInput} from '@react-native-material/core';

interface IInputProps {
  variant: 'filled' | 'outlined' | 'standard';
  margin: number;
  label: string;
}

function TextInput({variant, margin, label}: IInputProps) {
  return (
    <MaterialTextInput
      variant={variant}
      label={label}
      style={{margin: margin}}
    />
  );
}

export default TextInput;
