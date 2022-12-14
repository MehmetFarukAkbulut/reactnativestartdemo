import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource,title,score}) => {
    return (
        <ScrollView>
            <Image source={imageSource} />    
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </ScrollView>
    );
};

const styles= StyleSheet.create({});

export default ImageDetail;