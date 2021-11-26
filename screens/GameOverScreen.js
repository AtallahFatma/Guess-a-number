import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

function GameOverScreen({ guessRounds, userNumber, restartGame }) {
    return (
        <View style={styles.screen}>
            <TitleText>Gongratulations ! you won ..</TitleText>
            <BodyText>Number of rounds: {guessRounds}</BodyText>
            <BodyText>Number was: {userNumber}</BodyText>
            <Button title="Restart" onPress={restartGame} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default GameOverScreen;