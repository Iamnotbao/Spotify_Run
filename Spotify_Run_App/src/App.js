import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarLabelStyle: { color: "red" },
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="home-outline" size={24} color="black" />
                    ) :
                        (
                            <MaterialIcons name="home-filled" size={24} color="black" />
                        )
                }}


            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarLabelStyle: { color: "red" },
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="person-circle-outline" size={24} color="black" />
                    ) :
                        (
                            <Ionicons name="person-circle" size={24} color="black" />
                        )
                }} />


        </Tab.Navigator>
    )
}
const Stack = createNativeStackNavigator();
function App_Run() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main_Screen"
                    component={Main}
                    options={{ headerShown: false }}
               />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App_Run;