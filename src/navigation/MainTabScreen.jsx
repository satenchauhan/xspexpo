import React from "react";
import {
     RefreshControl, TextInput, Text, View, StyleSheet,
     SafeAreaView, ScrollView,
     TouchableOpacity, TouchableHighlight,
     Dimensions, Animated, Easing,
 } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';

import{ 
     CompanyNavigator,
     AboutNavigator,
     DocumentsNavigator,
     ItemsNavigator,
     RatesNavigator ,
} from "./SidebarMenu";

import {BottomTabNavigator} from "./BottomStackNavigator";
import {DrawerContent} from "../MainComponents/DrawerContent";
import { RoomEstimatorNavigator } from "./MainStackNavigator";
import {RootStackScreen} from '../FrontScreen/RootStackScreen';

import { NavHeadStyle,StackHeadClientStyle,StackHeadNewClient}from './StackStyle';

import NewClient from "../Clients/NewClient";
import ClientBottomTabs from "./ClientBottomTabs";



const ClinetStack = createStackNavigator();
const ClientNavigator = ({navigation})=> {
    return (
        <ClinetStack.Navigator screenOptions={NavHeadStyle}>
            <ClinetStack.Screen name="Client" component={ClientBottomTabs}  
                options={StackHeadClientStyle}   
            />
        </ClinetStack.Navigator>
    );
}; 

const NewClinetStack = createStackNavigator();
const NewClientNavigator = ({navigation})=> {
    return (
        <ClinetStack.Navigator screenOptions={NavHeadStyle}>
            <ClinetStack.Screen name="NewClient" component={NewClient}  
                options={StackHeadNewClient}   
            />
        </ClinetStack.Navigator>
    );
}; 


const Drawer = createDrawerNavigator();

const MainTabScreen = ({navigation}) => {
     return (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              {/* <Drawer.Screen name="RootStack" component={RootStackScreen} /> */}
              <Drawer.Screen name="HomePage" component={BottomTabNavigator} />
              <Drawer.Screen name="Company" component={CompanyNavigator} />
              <Drawer.Screen name="Documents" component={DocumentsNavigator} />
              <Drawer.Screen name="Rates" component={RatesNavigator} />
              <Drawer.Screen name="Items" component={ItemsNavigator} />
              <Drawer.Screen name="About" component={AboutNavigator} />
              <Drawer.Screen name="AddRoom" component={RoomEstimatorNavigator} />
              <Drawer.Screen name="Client" component={ClientNavigator} />
              <Drawer.Screen name="NewClient" component={NewClientNavigator} />
          </Drawer.Navigator>
     )
}

export default MainTabScreen;