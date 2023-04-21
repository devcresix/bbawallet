import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator, Button as PaperButton} from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTranslation} from '../../hooks/useTranslations';

interface IButtonProps {
  mode?: 'text' | 'contained' | 'outlined' | 'elevated' | 'contained-tonal';
  title?: string;
  icon?: string;
  uppercase?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

function Button({
  mode,
  title,
  icon,
  uppercase,
  iconRight,
  loading,
  onPress,
}: IButtonProps) {
  const iconToShow = (props: any) => {
    return loading ? (
      <ActivityIndicator {...props} animating={true} />
    ) : icon ? (
      <Icons {...props} name={icon} />
    ) : null;
  };

  return (
    <PaperButton
      mode={mode ?? 'text'}
      contentStyle={iconRight ? styles.iconRight : {}}
      uppercase={uppercase ?? false}
      icon={props => iconToShow(props)}
      disabled={loading}
      onPress={() => {
        if (onPress && !loading) {
          onPress();
        }
      }}>
      {title}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  iconRight: {flexDirection: 'row-reverse'},
});

export default withTranslation()(Button);
