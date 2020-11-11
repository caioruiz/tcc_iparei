import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView, YellowBox, View, Text } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognize WebSocket',
  'YellowBox has been'
]);

import Navigation from './Navigation';
import Login from './Login';


export default function Cadastrar() {
  return (
    <>
      <View>
          <Text>
              Testes
          </Text>
      </View>
    </>
    
  );
}
