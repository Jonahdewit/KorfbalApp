import React, {useState} from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
const Programma = () => {

    
  return (
<SafeAreaView style={styles.container}>
      <Text style={{ color: '#ef7900', fontSize: 20 }}>Korfbal Ereklasse veldseizoen 2023/2024</Text>
      <View style={{flexDirection: 'row'}}>
      <Button onPress={() => {alert('kaas')}} title='kaas' color={'orange'} />
      <Button onPress={() => {alert('worst')}} title='worst' color={'pink'} />

      <Button onPress={() => {('kaas')}} title='kaas' color={'orange'} />
  
      </View>
      <View style={{ flexDirection: "row", margin: 0 }}>
        <TouchableOpacity onPress={() => {alert('hoihoi')}}>
          <View style={styles.poule}>
            <Text>EK-01</Text>
            <Text>
              1. LDODK/Rinsma Modeplein 1 {"\n"}
              2. Mid-Fryslân/ReduRisk 1 {"\n"}
              3. SCO/European Aerosols 1 {"\n"}
              4. Sparta (Zw) 1 {"\n"}
            </Text>
          </View>
          <View style={styles.poule}>
            <Text>EK-02</Text>
            <Text>
              1. DOS (W) 1 {"\n"}
              2. DOS '46/VDK groep 1 {"\n"}
              3. Spirit 1 {"\n"}
              4. Unitas/Perspectief 1 {"\n"}
            </Text></View>
          <View style={styles.poule}>
            <Text>EK-03</Text>
            <Text>
              1. DSC 1 {"\n"}
              2. DVO/Transus 1 {"\n"}
              3. Oost-Arnhem 1 {"\n"}
              4. Wageningen 1 {"\n"}
            </Text>
          </View>
          <View style={styles.poule}>
            <Text>EK-04</Text>
            <Text>
              1. Dalto/Klaverblad Verzekeringen 1 {"\n"}
              2. Fiks 1 {"\n"}
              3. KVA 1 {"\n"}
              4. KZ/Keukensale.com 1 {"\n"}
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <View style={styles.poule}>
            <Text>EK-05</Text>
            <Text>
              1. AWDTV/IJskouddebeste 1 {"\n"}
              2. Blauw-Wit (A) 1 {"\n"}
              3. GG/RMcD Huis Emma 1 {"\n"}
              4. Tempo 1 {"\n"}
            </Text>
          </View>
          <View style={styles.poule}>
            <Text>EK-06</Text>
            <Text>
              1. Avanti/Post Makelaardij 1 {"\n"}
              2. Fortuna 1 {"\n"}
              3. KVS/Groeneveld Keukens 1 {"\n"}
              4. TOP/IAA fresh 1 {"\n"}
            </Text>
          </View>
          <View style={styles.poule}>
            <Text>EK-07</Text>
            <Text>
              1. Die Haghe 1 {"\n"}
              2. HKC (Ha) 1 {"\n"}
              3. KCC/CK Kozijnen 1 {"\n"}
              4. Valto 1 {"\n"}
            </Text>
          </View>
          <View style={styles.poule}>
            <Text>EK-08</Text>
            <Text>
              1. DeetosSnel 1 {"\n"}
              2. PKC/Vertom 1 {"\n"}
              3. Sporting Delta 1 {"\n"}
              4. TOP (A) 1 {"\n"}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )}
  
export default Programma;
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