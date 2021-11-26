import React from 'react';
import { StyleSheet, Text } from 'react-native';

function BodyText(props) {
    return (
        <Text style={styles.body}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'OpenSans',
        fontSize: 16
    }
})
export default BodyText;