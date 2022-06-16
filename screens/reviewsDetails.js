import React from 'react';
import { StyleSheet, Text, View, StatusBar,Button } from 'react-native';
import {globalestyle} from '../styles/global';


export default function reviewsDetails({navigation}){
    const BackHandler = () =>{
        navigation.goBack();
    }
    return (
        <View style={globalestyle.container}>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
