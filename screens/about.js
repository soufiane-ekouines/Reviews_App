import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function about(){
    return (
        <View style={styles.container}>
        <Text>About</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
