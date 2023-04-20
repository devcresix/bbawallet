/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Alert} from 'react-native';
import {CameraScreen as CameraKit} from 'react-native-camera-kit';

import {withTranslation} from '../../hooks/useTranslations';

function CameraScreen({_navigation, _t}: any) {
  function onBottomButtonPressed(event: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <CameraKit
      // Styles
      captureButtonImageStyle={{}}
      cameraFlipImageStyle={{}}
      torchImageStyle={{}}
      // QRCode
      scanBarcode={true}
      onReadCode={() => Alert.alert('QR code found')}
      showFrame={true}
      laserColor={'red'}
      frameColor={'white'}
      // TODO
      cameraRatioOverlay={undefined}
      captureButtonImage={undefined}
      cameraFlipImage={undefined}
      hideControls={undefined}
      torchOnImage={undefined}
      torchOffImage={undefined}
      // Events
      onBottomButtonPressed={event => onBottomButtonPressed(event)}
      // // flashImages={{
      // //   // optional, images for flash state
      // //   on: require('path/to/image'),
      // //   off: require('path/to/image'),
      // //   auto: require('path/to/image'),
      // // }}
      // cameraFlipImage={require('path/to/image')} // optional, image for flipping camera button
      // captureButtonImage={require('path/to/image')} // optional, image capture button
      // torchOnImage={require('path/to/image')} // optional, image for toggling on flash light
      // torchOffImage={require('path/to/image')} // optional, image for toggling off flash light
      // hideControls={false} // (default false) optional, hides camera controls
      // showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
      // // Barcode props
      // cameraRatioOverlay={{}}
      // captureButtonImageStyle={{}}
      // cameraFlipImageStyle={{}}
      // torchImageStyle={{}}
    />
  );
}

export default withTranslation()(CameraScreen);
