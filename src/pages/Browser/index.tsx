import React from 'react';
import {WebView} from 'react-native-webview';
import constants from '../../config/constants';

function BrowserPage(): JSX.Element {
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

export default BrowserPage;
