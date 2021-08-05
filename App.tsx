import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: useColorScheme() === 'dark' ? '#303030' : '#fff',
        }
      ]}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
