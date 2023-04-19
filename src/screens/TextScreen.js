import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const TextScreen=()=> {
    const [password, setPassword]= useState('');

    return (
    <View>
        <Text  style= {styles.text1}>Enter Password: </Text>
        <TextInput style= {styles.input}
        autoCapatalize="none"
        autoCorrect={false}
        value= {password}
        onChangeText={(newValue)=> setPassword(newValue) }
        />
        {password.length<4 ? <Text  style= {styles.text}>Password must be at least 4 characters</Text> : null }
    </View>
    );
};

const styles= StyleSheet.create({
    input: {
        margin:15,
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15, 
        fontSize: 16,
        textAlign:'center',alignSelf: 'center',
    }, text: {
        fontSize: 15,
        fontStyle:'bond',
        textAlign:'center'
    }, text1: {
        fontSize: 25,
        fontStyle:'bond',
        textAlign:'center'
    }


});


export default TextScreen;