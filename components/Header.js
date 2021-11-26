import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        backgroundColor: colors.indianPink,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'OpenSansBold'
    }
})

export default Header;