// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

export default function App() {
    const [index, setIndex] = React.useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{alphabet[index]}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
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
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});