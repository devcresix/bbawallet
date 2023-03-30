import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ProfileScreen(): any {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ProfileScreen;
