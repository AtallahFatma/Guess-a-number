import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import colors from '../config/colors';
import Card from '../components/Card';
import Input from '../components/Input';
const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={colors.purpel} title="Reset" onPress={() => { }} />
                    </View>
                    <View>
                        <Button color={colors.indianPink} title="Confirm" onPress={() => { }} />
                    </View>
                </View>
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