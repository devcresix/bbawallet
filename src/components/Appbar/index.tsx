import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Appbar as DefaultAppbar} from 'react-native-paper';

interface IAppbarProps {
  title?: string;
  rightIcon?: string;
  rightPress?: () => void;
  navigation: any;
  back: any;
}

function Appbar({
  title,
  rightIcon,
  rightPress,
  navigation,
  back,
}: IAppbarProps) {
  return (
    <DefaultAppbar.Header style={styles.appBarHeader}>
      {back ? (
        <DefaultAppbar.BackAction
          onPress={navigation.goBack}
          containerColor=""
        />
      ) : null}
      {title ? <DefaultAppbar.Content title={title} /> : null}
      {rightIcon ? (
        <DefaultAppbar.Action icon={rightIcon} onPress={rightPress} />
      ) : null}
    </DefaultAppbar.Header>
  );
}

const styles = StyleSheet.create({
  appBarHeader: {
    height: 50,
  },
  container: {
    zIndex: 10,
    height: 50,
    marginHorizontal: 15,
    width: Dimensions.get('window').width - 40,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Appbar;
