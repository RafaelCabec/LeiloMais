import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/Views/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home /> 
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01D696',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
