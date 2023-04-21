import React from 'react';
import {StyleSheet} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

// Utils
import {withTranslation} from '../../hooks/useTranslations';

interface IScanQRProps {
  onDetected: (detected: string) => void;
  t: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ScanQR({onDetected, t}: IScanQRProps) {
  const onBottomButtonPressed = (_event: any) => {
    throw new Error('Function not implemented.');
  };

  const onReadCode = (event: any) => {
    onDetected(event.nativeEvent.codeStringValue);
  };

  return (
    <CameraScreen
      scanBarcode
      showFrame
      laserColor="red"
      frameColor="white"
      onReadCode={onReadCode}
      onBottomButtonPressed={onBottomButtonPressed}
      hideControls
      // TODO
      cameraRatioOverlay={undefined}
      captureButtonImage={undefined}
      captureButtonImageStyle={styles.captureButtonImageStyle}
      cameraFlipImage={require('../../assets/images/scanqr/cameraFlipIcon.png')}
      cameraFlipImageStyle={styles.cameraFlipImageStyle}
      torchOnImage={undefined}
      torchOffImage={undefined}
      torchImageStyle={styles.torchImageStyle}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  captureButtonImageStyle: {},
  cameraFlipImageStyle: {},
  torchImageStyle: {},
});

export default withTranslation()(ScanQR);
