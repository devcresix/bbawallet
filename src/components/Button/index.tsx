/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Button as PaperButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTranslation} from '../../hooks/useTranslations';

interface IButtonProps {
  title: string;
  icon: string;
  uppercase?: boolean;
  onPress?: () => void;
}

function Button({title, icon, uppercase = false, onPress}: IButtonProps) {
  return (
    <PaperButton
      mode="contained"
      uppercase={uppercase}
      icon={props => <MaterialCommunityIcons name={icon} {...props} />}
      onPress={onPress}>
      {title}
    </PaperButton>
  );
}

export default withTranslation()(Button);
