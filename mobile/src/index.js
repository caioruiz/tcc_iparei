import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognize WebSocket',
  'YellowBox has been'
]);

import Navigation from './Navigation';


export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000'/>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
    
  );
}


