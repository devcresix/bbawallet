import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import 'react-native-get-random-values';
import './shim';

global.Buffer = global.Buffer || require('buffer').Buffer;

AppRegistry.registerComponent(appName, () => App);
