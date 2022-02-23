import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello word!</Text>
      <StatusBar style="auto" /> 
      {/* o status bar style auto vai puxar back ground para barra de notificação */}
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
