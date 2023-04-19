import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name= 'Faruk';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        fontStyle:'bond',
        textAlign:'center'
    },
    subHeaderStyle: {
        fontSize: 20,
        textAlign:'center'
    }
});

export default ComponentsScreen;