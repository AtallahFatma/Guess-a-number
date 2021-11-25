import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Card(props) {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        alignItems: 'center',
        shadowRadius: 6,
        shadowColor: colors.black,
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.26,
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 5 // only for android
    }
})
export default Card;