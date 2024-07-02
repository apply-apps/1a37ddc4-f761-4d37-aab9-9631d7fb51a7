// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const alphabet = [
    { letter: 'A', word: 'Apple' },
    { letter: 'B', word: 'Ball' },
    { letter: 'C', word: 'Cat' },
    { letter: 'D', word: 'Dog' },
    { letter: 'E', word: 'Elephant' },
];

export default function App() {
    const [index, setIndex] = useState(0);
    const [showWord, setShowWord] = useState(false);

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex + 1) % alphabet.length);
        setShowWord(false);
    };

    const handleShowWord = () => {
        setShowWord(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{alphabet[index].letter}</Text>
            {showWord && <Text style={styles.word}>{alphabet[index].word}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleShowWord}>
                <Text style={styles.buttonText}>Show Word</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    word: {
        fontSize: 40,
        marginVertical: 20,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});