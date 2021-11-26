import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import TitleText from './TitleText';

function Header({ title }) {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{title}</TitleText>
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
        fontWeight: '600'
    }
})

export default Header;