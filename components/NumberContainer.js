import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function NumberContainer(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.purpel,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: colors.purpel,
        fontSize: 22
    }
})

export default NumberContainer;