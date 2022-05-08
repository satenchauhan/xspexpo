import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    RefreshControl, TextInput, Text, View, StyleSheet,
    SafeAreaView, ScrollView,
    TouchableOpacity, TouchableHighlight,
    Dimensions, Animated, Easing,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {MainStackNavigator} from "./MainStackNavigator";
import EstimatesScreen from "../MainComponents/EstimatesScreen";
import ScheduleScreen from "../MainComponents/ScheduleScreen";
import TimesheetScreen from "../MainComponents/TimesheetScreen";
import SearchScreen from "../MainComponents/SearchScreen";
import { NavHeadStyle,StackHeadBackStyle }from './StackStyle';

const EstimateStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const TimesheetStack = createStackNavigator();
const SearchStack = createStackNavigator();

/*
const showBnt=(navigation)=> {
  const headerBtnStyle={
    title:() =>{ route.params.name },
    headerLeft: () => (
      <Icon name="menu" size={25} color="white" style={styles.bstyle} 
      onPress={() => navigation.openDrawer()} />
    ),
  }
}
*/


const EstimateStackScreen = ({ navigation }) => {
    return (
        <EstimateStack.Navigator screenOptions={NavHeadStyle}>
            <EstimateStack.Screen name="EstimatesScreen" component={EstimatesScreen}
                options={{
                    title: 'Estimator',
                    headerLeft: () => (
                        <Icon.Button name="arrow-back" size={25} color="#fff" backgroundColor="#3851DD"
                            onPress={() => navigation.goBack(null)}>
                        </Icon.Button>
                    ),
                }}
            />
        </EstimateStack.Navigator>
    );
};


const ScheduleStackScreen = ({ navigation }) => {
    return (
        <ScheduleStack.Navigator screenOptions={NavHeadStyle}>
            <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} options={StackHeadBackStyle} />
        </ScheduleStack.Navigator>
    );
};
const TimesheetStackScreen = ({ navigation }) => {
    return (
        <TimesheetStack.Navigator screenOptions={NavHeadStyle}>
            <TimesheetStack.Screen name="Timesheet" component={TimesheetScreen} options={StackHeadBackStyle} />
        </TimesheetStack.Navigator>
    );
};

const SearchStackScreen = ({ navigation }) => {
    return (
        <SearchStack.Navigator screenOptions={NavHeadStyle}>
            <SearchStack.Screen name="Search" component={SearchScreen} options={StackHeadBackStyle} />
        </SearchStack.Navigator>
    );
};
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#051E75",
            }}
        >
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="EstimatesScreen"
                component={EstimateStackScreen}
                options={{
                    tabBarLabel: 'Workbook',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="appstore-o" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Float"
                component={SearchStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color}) => (
                        <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                            style={{width:55, height:55, backgroundColor:"#00cec9", borderRadius:50, marginTop:3}}
                            onPress={() => {console.log('Float Button')}}
                        >
                            <Text style={{textAlign:'center',lineHeight:55, color:'#fff'}}>
                                <AntDesign name="plus" size={35}/>
                            </Text>
                        </TouchableHighlight>
                    ),
                }}
            />
            <Tab.Screen
                name="Schedule"
                component={ScheduleStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Timesheet"
                component={TimesheetStackScreen}
                options={{
                    tabBarLabel: 'Timesheet',
                    tabBarIcon: ({ color}) => (
                        <MaterialCommunityIcons name="alarm" color={color} size={27} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
}

export {BottomTabNavigator};

