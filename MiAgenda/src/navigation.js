import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer  } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
//screens
import Home from "./screens/Home"
import Task from "./screens/Task"
import Activities from "./screens/Activities"
import StackAggScreen from "./screens/home/StackAggScreen";
//icons
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();

function MiStackHome(){
    return(
        <StackHome.Navigator initialRouteName="Mis recordatorios">
        <StackHome.Screen name="Mis recordatorios"component={Home}></StackHome.Screen>
        <StackHome.Screen options={{ headerTitle: '',headerBackTitleVisible:false}}
         name="StackHome"component={StackAggScreen} initialParams={{parametro:"recordatorio"}}></StackHome.Screen>
        </StackHome.Navigator>
    )

}

function MiStackTareas(){
    return(
        <StackHome.Navigator initialRouteName="Mis tareas">
        <StackHome.Screen name="Mis tareas"component={Task}></StackHome.Screen>
        <StackHome.Screen options={{ headerTitle: '',headerBackTitleVisible:false}}
        name="StackTarea"component={StackAggScreen} initialParams={{parametro:"tarea"}}></StackHome.Screen>
        </StackHome.Navigator>
    )  
}

function MiStackActividades(){
    return(
<       StackHome.Navigator initialRouteName="Mis actividades">
        <StackHome.Screen name="Mis actividades"component={Activities}></StackHome.Screen>
        <StackHome.Screen options={{ headerTitle: '',headerBackTitleVisible:false}}
        name="StackActividades"component={StackAggScreen} initialParams={{parametro:"actividad"}}></StackHome.Screen>
        </StackHome.Navigator>
    )  
}






function MisTabs(){
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;   
                if (route.name === 'Recordatorios') {
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Tareas') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                } else if (route.name === 'Actividades') {
                    iconName = focused ? 'reader' : 'reader-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })} 
        >
            <Tab.Screen name="Recordatorios" component={MiStackHome} options={{headerShown: false}}></Tab.Screen>
            <Tab.Screen name="Tareas" component={MiStackTareas}  options={{headerShown: false}} ></Tab.Screen>
            <Tab.Screen name="Actividades" component={MiStackActividades}  options={{headerShown: false}} ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MisTabs/>
        </NavigationContainer>
    )
}