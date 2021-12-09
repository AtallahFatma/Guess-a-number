import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import colors from '../config/colors';

function GameOverScreen({ guessRounds, userNumber, restartGame }) {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        }
        const subscription = Dimensions.addEventListener('change', updateLayout);
        return () => subscription?.remove();

    })

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>Gongratulations ! you won ..</TitleText>
                <View style={{
                    ...styles.imageContainer, ...{
                        width: availableDeviceWidth * 0.7,
                        height: availableDeviceWidth * 0.7,
                        borderRadius: (availableDeviceWidth * 0.7) / 2,
                        marginVertical: availableDeviceHeight / 30
                    }
                }}>
                    <Image
                        fadeDuration={100}
                        style={styles.image}
                        resizeMode="cover"
                        //source={require('../assets/success.png')} 
                        source={{ uri: "https://images.assetsdelivery.com/compings_v2/nastyaaroma/nastyaaroma1604/nastyaaroma160400051.jpg" }}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={{
                        ...styles.resultText, ...{ fontSize: availableDeviceHeight < 400 ? 16 : 18 }
                    }}>
                        Your phone needed <Text style={styles.highlight}>{guessRounds} </Text>
                        rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                    </BodyText>
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
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: colors.black,
        overflow: 'hidden',
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
        marginVertical: 10
    }
})
export default GameOverScreen;