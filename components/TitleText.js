import React from 'react';
import { StyleSheet, Text } from 'react-native';

function TitleText(props) {
    return (
        <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 22
    }
})
export default TitleText;