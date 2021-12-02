import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../config/colors';

function GameOverScreen({ guessRounds, userNumber, restartGame }) {
    return (
        <View style={styles.screen}>
            <TitleText>Gongratulations ! you won ..</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={100}
                    style={styles.image}
                    resizeMode="cover"
                    //source={require('../assets/success.png')} 
                    source={{ uri: "https://images.assetsdelivery.com/compings_v2/nastyaaroma/nastyaaroma1604/nastyaaroma160400051.jpg" }}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{guessRounds} </Text>
                    rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></BodyText>
            </View>
            <Button title="Restart" onPress={restartGame} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 200,
        borderWidth: 3,
        borderColor: colors.black,
        width: '80%',
        height: 300,
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        height: '100%',
        width: '100%'
    },
    highlight: {
        color: colors.indianPink,
        fontFamily: 'OpenSansBold'
    },
    resultContainer: {
        width: '80%',
        marginHorizontal: 20
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10
    }
})
export default GameOverScreen;