import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import colors from '../config/colors';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';

const StartGameScreen = ({ onStartGame }) => {

    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setNumber(inputText.replace(/[^0-9]/g, '1'));
    };

    const resetInputHandler = () => {
        setNumber('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(number);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setNumber('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You selected </BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => onStartGame(selectedNumber)} />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() =>
            Keyboard.dismiss()
        }>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <BodyText>Set a number</BodyText>
                    <Input
                        style={styles.input}
                        value={number}
                        onChangeText={numberInputHandler}
                        blurOnSubmit autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                color={colors.purpel}
                                title="Reset"
                                onPress={resetInputHandler} />
                        </View>
                        <View>
                            <Button
                                color={colors.indianPink}
                                title="Confirm"
                                onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                <View>{confirmedOutput}</View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'OpenSans'
    },
    inputContainer: {
        padding: 20,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    },
    input: {
        width: 80,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})
export default StartGameScreen;