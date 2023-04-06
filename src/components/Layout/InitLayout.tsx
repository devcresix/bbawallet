import React, {ReactNode} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

interface Props {
  children?: ReactNode;
}

function InitLayout({children}: Props) {
  const {colors} = useTheme();
  return (
    <View
      style={{
        ...styles.viewStyles,
        backgroundColor: colors.background,
      }}>
      <View
        style={{
          ...styles.containerStyles,
        }}>
        <Image
          style={{
            ...styles.logoStyle,
          }}
          resizeMode="contain"
          source={require('../../assets/images/Logo.png')}
        />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    justifyContent: 'center',
  },
  containerStyles: {
    // position: 'absolute',
    // // top: 0,
    // // left: 0,
    // // right: 0,
    // // bottom: 0,
    alignItems: 'center',
  },
  logoStyle: {
    height: 180,
    width: '100%',
  },
});

export default InitLayout;
