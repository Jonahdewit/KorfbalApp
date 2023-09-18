import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/Home';
import Uitslagen from "./screens/Uitslagen";
import Programma from "./screens/Programma";
import Stand from "./screens/Stand";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Uitslagen" component={Uitslagen}/>
                <Stack.Screen name="Programma" component={Programma}/>
                <Stack.Screen name="Stand" component={Stand}/>
            </Stack.Group>
        </Stack.Navigator>
    );

};
export default StackNavigator;