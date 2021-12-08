import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import colors from '../config/colors';

function GameOverScreen({ guessRounds, userNumber, restartGame }) {
    return (
        <ScrollView>
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
                <MainButton onPressButton={restartGame} >Restart</MainButton>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    screen: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: colors.black,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
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
        fontSize: Dimensions.get('window').height < 400 ? 16 : 18,
        marginVertical: 10
    }
})
export default GameOverScreen;