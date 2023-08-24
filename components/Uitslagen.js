import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import axios from "axios";

const Uitslagen = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const currentDate = new Date();
                // const diff = currentDate.getDay() - 1;
                // let diff2 = 15 - currentDate.getDay();

                // if (diff < 0) {
                //     diff += 6;
                // }

                // const startDate = new Date(currentDate.setDate(currentDate.getDate() - diff));
                // const formattedStartDate = `${startDate.getFullYear()}-${('0' + (startDate.getMonth() + 1)).slice(-2)}-${('0' + startDate.getDate()).slice(-2)}`;

                // if (diff2 < 0) {
                //     diff2 += 7;
                // }

                // const endDate = new Date(currentDate.setDate(currentDate.getDate() + diff2));
                // const formattedEndDate = `${endDate.getFullYear()}-${('0' + (endDate.getMonth() + 1)).slice(-2)}-${('0' + endDate.getDate()).slice(-2)}`;

                const response = await axios.get(`https://api-mijn.korfbal.nl/api/v2/clubs/NCX23W1/program?&dateFrom=2023-08-22&dateTo=2023-09-22`);
                
                const array = response.data[0].matches.map(el => (
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.match}>
                            <Text>Plaats: {el.facility.address.city}</Text>
                        </View>
                        <View style={styles.match}>
                            <Text>Thuis: {el.teams.home.name}</Text>
                        </View>
                        <View style={styles.match}>
                            <Text>Uit: {el.teams.away.name}</Text>
                        </View>
                    </View>
                ));
                
                setSchedule(array);
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchData();
    }, []);

    return (
        <ScrollView>
            {schedule}
        </ScrollView>
    );
}

export default Uitslagen;

const styles = StyleSheet.create({
    match: {
      margin: 0,
      padding: 5, 
      backgroundColor: "lightgray", 
      width: 130, 
      height: 75,
      borderWidth: 1,
      borderColor: "black",
      justifyContent: "center",
    }
  });