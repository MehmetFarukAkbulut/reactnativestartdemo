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
        color='#FF949D'
        style={styles.roundedButton}
        
        
    />
    <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
        color='#B9B8FF'
        style={styles.roundedButton}
    />
    <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
        color='#73A1FF'
        style={styles.roundedButton}
    />
    <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
        color='#FFE4DB'
        style={styles.roundedButton}
    />
    <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
        color='#FFBF87'
        style={styles.roundedButton}
    />
    <Button 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
        color='#B25741'
        style={styles.roundedButton}
    />
    
    <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
        color='#FFA690'
        style={styles.roundedButton}
    />
    <Button 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo"
        color='#FF9176'
        style={styles.roundedButton}
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
        textAlign:'center',alignSelf: 'center',
      },  roundedButton: {
        borderRadius: 100,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 20,
    },container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#D1D9D7'
    },  buttonView1: { flex: 1, alignSelf: 'stretch', marginLeft:10,marginRight:10},
    text1:{color:'#1561ad', fontSize: 25, fontWeight: 'bold', marginTop:25,textAlign:'center'},
    text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
    text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' },
  });

export default HomeScreen;