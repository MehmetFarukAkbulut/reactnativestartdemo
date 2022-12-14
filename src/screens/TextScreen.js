import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const TextScreen=()=> {
    const [password, setPassword]= useState('');

    return (
    <View>
        <Text>Enter Password: </Text>
        <TextInput style= {styles.input}
        autoCapatalize="none"
        autoCorrect={false}
        value= {password}
        onChangeText={(newValue)=> setPassword(newValue) }
        />
        {password.length<4 ? <Text>Password must be at least 4 characters</Text> : null }
    </View>
    );
};

const styles= StyleSheet.create({
    input: {
        margin:15,
        borderColor: 'black',
        borderWidth: 2
    }

});


export default TextScreen;