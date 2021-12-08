import React, { useState, useRef, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Dimensions, View } from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import { AntDesign } from '@expo/vector-icons';
import BodyText from '../components/BodyText';
import colors from '../config/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const renderListItem = (listLength, itemData) => {
    return <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
}

function GameScreen(props) {
    const initialGuess = generateRandomBetween(1, 100, props.userChoise);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    // these values are not rengenerated when component is re-rendered
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoise, onGameOver } = props;

    // always executed after component in rendered
    useEffect(() => {
        if (currentGuess === userChoise) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoise, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userChoise) ||
            (direction === 'greater' && currentGuess > userChoise)
        ) {
            Alert.alert('dont lie!',
                'You know that this is wrong ..',
                [{ title: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses])
    }

    return (
        <View style={styles.screen}>
            <TitleText style={styles.text}>Opponent't guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPressButton={nextGuessHandler.bind(this, 'lower')} >
                    <AntDesign name="minuscircleo" size={24} color="white" />
                </MainButton>
                <MainButton onPressButton={nextGuessHandler.bind(this, 'greater')}>
                    <AntDesign name="pluscircleo" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList
                    data={pastGuesses}
                    keyExtractor={item => item}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 30 : 5,
        width: 400,
        maxWidth: '90%'
    },
    text: {
        fontSize: 18
    },
    listItem: {
        borderColor: colors.mediumGrey,
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    listContainer: {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '60%' : '50%',
    },
    list: {
        flexGrow: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end'
    }
})
export default GameScreen;