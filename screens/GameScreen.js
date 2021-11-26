import React, { useState, useRef, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import colors from '../config/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen(props) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise));
    const [rounds, setRounds] = useState(0);
    // these values are not rengenerated when component is re-rendered
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoise, onGameOver } = props;

    // always executed after component in rendered
    useEffect(() => {
        if (currentGuess === userChoise) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoise, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userChoise) ||
            (direction === 'greater' && currentGuess > userChoise)
        ) {
            Alert.alert('dont lie!',
                'You know that this is wrong ..',
                [{ title: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <TitleText style={styles.text}>Opponent't guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button color={colors.purpel} title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button color={colors.indianPink} title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    text: {
        fontSize: 18
    }
})
export default GameScreen;