import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';

function MainButton(props) {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPressButton}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.purpel,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'OpenSans',
        fontSize: 18
    }
})
export default MainButton;