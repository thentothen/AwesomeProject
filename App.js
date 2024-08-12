import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Constants from 'expo-constants';
import SplashScreen from 'react-native-splash-screen';
import Stack from './src/stack';

function App() {
  useEffect(() => {
    console.log('Constants:' + Constants);
    console.log(SplashScreen);

    SplashScreen?.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

export default App;
