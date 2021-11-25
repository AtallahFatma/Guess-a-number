import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import colors from '../config/colors';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

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
                <Text>You selected </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" />
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
                    <Text>Set a number</Text>
                    <Input style={styles.input} value={number} onChangeText={numberInputHandler} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={colors.purpel} title="Reset" onPress={resetInputHandler} />
                        </View>
                        <View>
                            <Button color={colors.indianPink} title="Confirm" onPress={confirmInputHandler} />
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
        fontSize: 18,
        marginVertical: 10
    },
    inputContainer: {
        padding: 20,
        width: 300,
        maxWidth: '80%'
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
    }
})
export default StartGameScreen;