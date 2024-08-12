/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(
  process.env.EXPO_PUBLIC_REGIST_NAME || appName,
  () => App,
);
