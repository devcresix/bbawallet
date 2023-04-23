import React, {ReactNode} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  children?: ReactNode;
}

function InitLayout({children}: Props) {
  return (
    <View
      style={{
        ...styles.viewStyles,
        // backgroundColor: theme.colors.background,
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
          source={require('../../../assets/images/Logo.png')}
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
    alignItems: 'center',
  },
  logoStyle: {
    height: 180,
    width: '100%',
  },
});

export default InitLayout;
