import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {RadialGradient} from 'react-native-gradients';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BackgroundGradient = ({style, children}: any) => {
  const colorList = [
    {offset: '25%', color: '#7AF1EC', opacity: '1'},
    {offset: '95%', color: '#8AFFE9', opacity: '1'},
  ];

  return (
    <View style={[styles.gradientBg, style]}>
      <RadialGradient
        colorList={colorList}
        x={Dimensions.get('window').width / 2}
        y={Dimensions.get('window').height / 2}
        rx={Dimensions.get('window').width}
        ry={Dimensions.get('window').height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gradientBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default BackgroundGradient;
