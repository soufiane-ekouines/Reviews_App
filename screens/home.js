import React from 'react';
import { Text, View, StatusBar,FlatList,TouchableOpacity } from 'react-native';
import {globalestyle} from '../styles/global';
import { useState } from 'react';

export default function home({navigation}) {
    const pressHandler = (item) => {
    //    navigation.navigate('reviewsDetails',item);
    // navigation.push('reviewsDetails');
    }
    const [reviews, setReviews] = useState([
        {
            title: 'Review 1',  // title of the review
            rating: 5, // rating of the review
            body: 'This is a review from soufiane', // body of the review
            key: '1', // key of the review
        },
        {
            title: 'Review 2',  // title of the review
            rating: 4, // rating of the review
            body: 'This is a review from ekouines', // body of the review
            key: '2', // key of the review
        },
        {
            title: 'Review 3',  // title of the review
            rating: 3, // rating of the review
            body: 'This is a review from soufiane ekouines', // body of the review
            key: '3', // key of the review
        }
    ]);

    return (
        <View style={globalestyle.container}>
            <FlatList 
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => navigation.navigate('reviewsDetails',item)}>
                    <Text style={globalestyle.TitleText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    );
}

