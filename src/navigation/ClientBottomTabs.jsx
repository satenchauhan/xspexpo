import React from "react";
import {Text, StyleSheet,TouchableOpacity, TouchableHighlight,} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import HomeScreen from "../MainComponents/HomeScreen";
import ClientsScreen from "../MainComponents/ClientsScreen";


const ClientBottomTabs = (props) => {
    const navigation = useNavigation();
    const BottomTab = createBottomTabNavigator();
    return (
        <BottomTab.Navigator
            initialRouteName="Client"
            tabBarOptions={{
                activeTintColor: "#051E75",
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={ClientsScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity activeOpacity={'#F5F5FF'} onPress={() => navigation.goBack(null)}>
                            <MaterialCommunityIcons name="home" color={color} size={25} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <BottomTab.Screen
                name="NewClient"
                component={""}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray"
                            style={{ width: 55, height: 55, backgroundColor: "#00cec9", borderRadius: 50, marginTop: 3 }}
                            onPress={() => props.navigation.navigate("NewClient")}
                        >
                            <Text style={{ textAlign: 'center', lineHeight: 55, color: '#fff' }}>
                                <AntDesign name="plus" size={35} />
                            </Text>
                        </TouchableHighlight>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Client"
                component={ClientsScreen}
                options={{
                    tabBarLabel: 'Client',
                    activeTintColor: "#051E75",
                    tabBarIcon: ({ color, size }) => (

                        <Icon name="user" color={color} size={25} />
                    ),
                }}
            />

        </BottomTab.Navigator>
    )
}

export default ClientBottomTabs

const styles = StyleSheet.create({})
