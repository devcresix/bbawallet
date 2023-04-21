import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import 'react-native-get-random-values';
import {decode, encode} from 'base-64';
import './shim';

global.Buffer = global.Buffer || require('buffer').Buffer;

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

AppRegistry.registerComponent(appName, () => App);
