import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action)=> {
    //state === {count: number}
    //action === {type: 'increment' || 'decrement', payload: 1 }

    switch (action.type){
        case 'increment':
            return { ...state, count: state.count+action.payload};
        case 'decrement':
            return { ...state, count: state.count-action.payload};
        case 'doubleCounter':
            return { ...state, count: state.count+state.count};
        case 'square':
            return { ...state, count: state.count*state.count};
        case 'reset':
            return { ...state, count: state.count-state.count};
        case 'refresh':
            return { ...state, count: 0};
        default:
            return state;
    }
};
const CounterScreen=()=> {
    const [state, dispatch]= useReducer(reducer, { count:0 })

    return (
    <View>
        <Button 
        title="Increase" 
        onPress={()=> {
            dispatch({ type: 'increment',payload:1})
        // setCounter(counter +1);
        }} 
        />
        <Button 
        title="Decrease" 
        onPress={()=> {
            dispatch({ type: 'decrement',payload:1})
        // setCounter(counter -1);
        }} 
        />
        <Button 
        title="Double Counter" 
        onPress={()=> {
            dispatch({ type: 'doubleCounter'})
        // setCounter(counter+counter);
        }} 
        />
        <Button 
        title="square" 
        onPress={()=> {
            dispatch({ type: 'square'})
        // setCounter(counter*counter);
        }} 
        />
        <Button 
        title="Reset" 
        onPress={()=> {
            dispatch({ type: 'reset'})
        // setCounter(counter-counter);
        }} 
        />
        
        <Button 
        title="Refresh" 
        onPress={()=> {
            dispatch({ type: 'refresh'})
        //setCounter(0);
        }} 
        />
        <Text>Current Count: {state.count} </Text>

    </View>
    );
};

const styles= StyleSheet.create({});

export default CounterScreen;