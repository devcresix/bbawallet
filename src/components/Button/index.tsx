/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTranslation} from '../../hooks/useTranslations';

interface IButtonProps {
  mode?: 'text' | 'contained' | 'outlined' | 'elevated' | 'contained-tonal';
  title?: string;
  icon?: string;
  uppercase?: boolean;
  iconRight?: boolean;
  onPress?: () => void;
}

function Button({
  mode,
  title,
  icon,
  uppercase,
  iconRight,
  onPress,
}: IButtonProps) {
  return (
    <PaperButton
      mode={mode ?? 'text'}
      contentStyle={iconRight ? styles.iconRight : {}}
      uppercase={uppercase ?? false}
      icon={props => (icon ? <Icons {...props} name={icon} /> : null)}
      onPress={onPress}>
      {title}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  iconRight: {flexDirection: 'row-reverse'},
});

export default withTranslation()(Button);
