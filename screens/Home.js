import React, {useState} from "react";
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    
    const nav = useNavigation();
    
    return (
        <SafeAreaView style={{flex: 1, alignItems: "center"}}>
            <Text style={{fontSize:20}}>Korfbal</Text>
            <Button onPress={() => nav.navigate('Programma')} title="Programma's"/>
            <Button onPress={() => nav.navigate('Uitslagen')} title="Uitslagen"/>
            <Button onPress={() => nav.navigate('Stand')} title="Standen"/>

            
        </SafeAreaView>
    )
}

export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    poule: {
      margin: 0,
      padding: 5, 
      backgroundColor: "lightgray", 
      width: 170, 
      height: 150,
      borderWidth: 1,
      borderColor: "black"
    }
  });