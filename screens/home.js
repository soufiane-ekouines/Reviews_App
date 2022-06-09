import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {globalestyle} from '../styles/global';

export default function home(){
    return (
        <View style={globalestyle.container}>
        <Text style={globalestyle.TitleText}>Home hi</Text>
        <StatusBar style="auto" />
        </View>
    );
}

