import React from 'react';
import {WebView} from 'react-native-webview';

// Components
import constants from '../../config/constants';

function BrowserScreen() {
  return (
    <>
      <WebView
        source={{uri: constants.BROWSER_DEFAULT_URL}}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </>
  );
}

export default BrowserScreen;
