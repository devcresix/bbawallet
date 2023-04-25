import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTabBar as DefaultBottomTabBar} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const TabNavigator = (props: any) => {
  return (
    <BlurView
      style={styles.blurView}
      blurType="dark"
      blurAmount={10}
      blurRadius={25}
      overlayColor="transparent">
      <DefaultBottomTabBar {...props} />
    </BlurView>
  );
};
