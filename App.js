import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Snavigator from './Snavigator';

export default function App() {
  return (
    <NavigationContainer>
        <Snavigator />
    </NavigationContainer>
  );
}

const handleButtonPress = () => {
  // Your button press logic goes here
  console.log('Button pressed');
};