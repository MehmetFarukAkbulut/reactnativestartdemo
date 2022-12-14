import React, {useState} from "react";
import { Text,TextInput, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
    
  const [playerName, setPlayerName] = useState('');

    return (
    <View style={styles.buttonView1}> 
    <Text style = { styles.text }> Demo Uygulamasına Hoşgeldin! </Text>
    
        <TextInput
        style={styles.input}
        placeholder="Lütfen adınızı giriniz"
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
      />
      <Text style={styles.text3}>Merhaba {playerName}!</Text>
    <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
        color='#ffc1c1'
        
    />
    <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
        color='#eeb4b4'
    />
    <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
        color='#cd9b9b'
    />
    <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
        color='#8b6969'
    />
    <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
        color='#cd5c5c'
    />
    <Button 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
        color='#ff6a6a'
    />
    
    <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
        color='#ee6363'
    />
    <Button 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo"
        color='#cd5555'
    />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontStyle:'bond',
        textAlign:'center'
    },  input: {
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        fontSize: 16,
        textAlign:'center'
      },  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#D1D9D7'
    },  buttonView1: { flex: 1, alignSelf: 'stretch', marginLeft:10,marginRight:10},
    text1:{color:'#1561ad', fontSize: 25, fontWeight: 'bold', marginTop:25,textAlign:'center'},
    text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
    text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' }
  });

export default HomeScreen;