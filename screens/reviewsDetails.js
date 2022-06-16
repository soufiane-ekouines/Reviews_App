import React from 'react';
import { StyleSheet, Text, View, StatusBar,Button } from 'react-native';
import {globalestyle} from '../styles/global';


export default function reviewsDetails({navigation}){
    const BackHandler = () =>{
        navigation.goBack();
    }
    return (
        <View style={globalestyle.container}>
        <Text style={globalestyle.TitleText}>{navigation.getParam('title')}</Text>
        <Text style={globalestyle.TitleText}>{navigation.getParam('body')}</Text>
        <Text style={globalestyle.TitleText}>{navigation.getParam('rating')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
