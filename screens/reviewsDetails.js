import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function reviewsDetails(){
    return (
        <View style={styles.container}>
        <Text>review</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
