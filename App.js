import React, { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, View } from 'react-native';
import colors from './config/colors';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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
    backgroundColor: colors.white,
  },
});
