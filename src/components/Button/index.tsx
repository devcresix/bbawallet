/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Button as MaterialButton} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IButtonProps {
  title: string;
  icon: string;
  uppercase?: boolean;
  onPress?: () => void;
}

function Button({title, icon, uppercase = false, onPress}: IButtonProps) {
  return (
    <MaterialButton
      title={title}
      uppercase={uppercase}
      leading={props => <MaterialCommunityIcons name={icon} {...props} />}
      onPress={onPress}
    />
  );
}

export default Button;
