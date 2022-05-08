import React from "react";
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavHeadStyle,AddRoomHeaderStyle,StackHeadLeftStyle,StackHeadMenubarStyle }from './StackStyle';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../MainComponents/HomeScreen";
import RequestsScreen from "../MainComponents/RequestsScreen";
import ClientsScreen from "../MainComponents/ClientsScreen";
import ExpensesScreen from "../MainComponents/ExpensesScreen";
import InvoicesScreen from "../MainComponents/InvoicesScreen";
import JobsScreen from "../MainComponents/JobsScreen";
import NoteScreen from "../MainComponents/NoteScreen";
import TaskScreen from "../MainComponents/TaskScreen";
import SettingsScreen from "../MainComponents/SettingsScreen";
import AddRoomFrame from "../MainComponents/AddRoomFrame";
import Recent from "../Clients/Recent";
import AllClients from "../Clients/AllClients";
import ByStatus from "../Clients/ByStatus";



const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
function Test() {
  return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#fff',
        style: { backgroundColor:"#3851DD", },
      }}>
         <Tab.Screen name="Recent" component={Recent} />
         <Tab.Screen name="All" component={AllClients} />
         <Tab.Screen name="By Status" component={ByStatus} />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();


const RoomStack = createStackNavigator();
const RoomEstimatorNavigator = ({navigation})=> {
    return (
        <RoomStack.Navigator screenOptions={NavHeadStyle}>
            <RoomStack.Screen name="AddRoom" component={AddRoomFrame}  
                options={AddRoomHeaderStyle}   
            />
        </RoomStack.Navigator>
    );
}; 

const MainStackNavigator =({navigation})=>{
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name='OneQuote' component={HomeScreen} options={StackHeadMenubarStyle} />
            <Stack.Screen name="RequestsScreen" component={RequestsScreen} options={{title:'Requests',StackHeadLeftStyle}} />
            <Stack.Screen name="JobsScreen" component={JobsScreen} options={{title:'Jobs',StackHeadLeftStyle}} />
            <Stack.Screen name="InvoicesScreen" component={InvoicesScreen} options={{title:'Invoices',StackHeadLeftStyle}} />
            <Stack.Screen name="TaskScreen" component={TaskScreen} options={{title:'Tasks',StackHeadLeftStyle}}/>
            <Stack.Screen name="Clients" component={ClientsScreen} options={{title:'Client',StackHeadLeftStyle}}/>
            <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} options={{title:'Expenses',StackHeadLeftStyle}} />
            <Stack.Screen name="NoteScreen" component={NoteScreen} options={{title:'Notes',StackHeadLeftStyle}} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title:'Estimator Settings',StackHeadLeftStyle}}/>
        </Stack.Navigator>
    )
}

export {MainStackNavigator,RoomEstimatorNavigator};

