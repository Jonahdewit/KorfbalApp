import React, { useState, useEffect} from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from "axios";

const Uitslagen = () => {
  const [uitslagendata, setUitslag] = useState([]);
  let array = [];
  const Data = async () => {
    let uitslagendata = await axios.request('https://api-mijn.korfbal.nl/api/v2/matches/pools/89002/results?dateFrom=2023-08-18&dateTo=2023-09-18'); ;

    uitslagendata.data.map(el => {
      array.push(
        <View>
          <Text>{el.matches[0].date}</Text>
          <Text>{el.matches[0].teams.home.name}</Text>
          <Text>{el.matches[0].teams.away.name}</Text>
          <Text>{el.matches[0].sport.descriprion}</Text>

        </View>
      )
    });
    setUitslag(array);
  }
  
  useEffect(() => {
    Data();
  }, []);
  setTimeout(() => {
    console.log(array);
    console.log(uitslagendata.data[0]);
  }, 3000);
  return (
        <View style={{ padding: 10 }}>
            {uitslagendata}
        </View>
    )
}

export default Uitslagen;
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