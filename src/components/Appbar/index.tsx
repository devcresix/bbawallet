import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Appbar as DefaultAppbar} from 'react-native-paper';

function Appbar({navigation, back}: any): any {
  return (
    <DefaultAppbar.Header style={styles.appBarHeader}>
      {back ? (
        <DefaultAppbar.BackAction
          onPress={navigation.goBack}
          containerColor=""
        />
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
  textSwitchAccount: {
    fontWeight: '700',
    alignContent: 'center',
  },
});

export default Appbar;
