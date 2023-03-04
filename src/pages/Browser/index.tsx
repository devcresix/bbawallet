// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import BROWSER_DEFAULT_URL from '../../config/constants';

function BrowserPage(): JSX.Element {
  return (
    <WebView
      source={{uri: BROWSER_DEFAULT_URL}}
      onError={syntheticEvent => {
        const {nativeEvent} = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
    />
  );
}

export default BrowserPage;
