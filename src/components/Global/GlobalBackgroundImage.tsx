import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    margin: 'auto',
    marginTop: 0,
    top: 0,
    right: 0,
    bottom: -1,
    left: 0,
    maxWidth: theme.variables.mobileWidthXL,
    maxHeight: theme.variables.mobileHeightLG,
  },
  modal: {
    marginTop: theme.gutters.paddingNormal,
  },
  modalBr: {
    borderRadius: theme.borderRadius.borderRadiusMD,
  },
});

const GlobalBackgroundImage = ({children, isModal, ...props}: any) => (
  <ImageBackground
    source={require('../../assets/images/AppBackground.png')}
    style={[styles.image, isModal && styles.modal]}
    imageStyle={isModal && styles.modalBr}
    {...props}>
    {children}
  </ImageBackground>
);

export default GlobalBackgroundImage;
