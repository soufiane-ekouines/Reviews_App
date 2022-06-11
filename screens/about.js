import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {globalestyle} from '../styles/global';


export default function about(){
    return (
        <View style={globalestyle.container}>
        <Text>About</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

});
