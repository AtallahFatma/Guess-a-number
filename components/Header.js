import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import TitleText from './TitleText';

function Header({ title }) {
    return (
        <View style={{
            ...styles.headerBase, ...Platform.select({
                ios: styles.headerIos,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.headerTitle}>{title}</TitleText>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIos: {
        backgroundColor: colors.lightGrey,
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: colors.indianPink,
    },
    headerTitle: {
        color: 'black',
        fontWeight: '600'
    }
})

export default Header;