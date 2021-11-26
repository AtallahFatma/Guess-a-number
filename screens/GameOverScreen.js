import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function GameOverScreen({ guessRounds, userNumber, restartGame }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Gongratulations ! you won ..</Text>
            <Text>Number of rounds: {guessRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button title="Restart" onPress={restartGame} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22
    }
})
export default GameOverScreen;