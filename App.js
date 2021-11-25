import React from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, View } from 'react-native';
import colors from './config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
