import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import colors from './config/colors';

import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    })
    setFontLoaded(true);
  }

  useEffect(() => {
    fetchFonts();
  })

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const restartGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} guessRounds={guessRounds} restartGame={restartGame} />
  }

  return (
    !fontLoaded ?
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={colors.indianPink} />
      </View> :
      <View style={styles.container}>
        <Header title={guessRounds > 0 ? "The Game is over!" : "Guess a number"} />
        {content}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
