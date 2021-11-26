import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from './config/colors';

import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const fetchFonts = () => {
  Font.loadAsync({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
}


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={console.warn} />
  }

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
    <View style={styles.container}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
});
