import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';
import { NavHeadStyle }from './StackStyle';

import About from "../DrawerComponents/About";
import Company from "../DrawerComponents/Company";
import Contact from "../DrawerComponents/Contact";
import Documents from "../DrawerComponents/Documents";
import Items from "../DrawerComponents/Items";
import Rates from "../DrawerComponents/Rates";


const Stack = createStackNavigator();


const CompanyNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name="Company" component={Company} 
                options={{
                    title:"Company",
                    headerLeft: () => (
                      <Icon.Button name="arrow-back" title="Settings" size={25} color="white"
                          backgroundColor="#051E75"  onPress={() => navigation.goBack(null)}>
                      </Icon.Button>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};
const AboutNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name="About" component={About} 
                options={{
                    title:"About",
                    headerLeft: () => (
                      <Icon.Button name="arrow-back" title="Settings" size={25} color="white"
                          backgroundColor="#051E75"  onPress={() => navigation.goBack(null)}>
                      </Icon.Button>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};
const ContactNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name="Contact" component={Contact} 
                options={{
                    title:"Contact",
                    headerLeft: () => (
                      <Icon.Button name="arrow-back" size={25} color="white"
                          backgroundColor="#051E75"  onPress={() => navigation.goBack(null)}>
                      </Icon.Button>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};
const DocumentsNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name="Documents" component={Documents} 
                options={{
                    title:"Documents",
                    headerLeft: () => (
                      <Icon.Button name="arrow-back" size={25} color="white"
                          backgroundColor="#051E75"  onPress={() => navigation.goBack(null)}>
                      </Icon.Button>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};
const ItemsNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name="Items" component={Items} 
                options={{
                    title:"Items",
                    headerLeft: () => (
                      <Icon.Button name="arrow-back" size={25} color="white"
                          backgroundColor="#051E75"  onPress={() => navigation.goBack(null)}>
                      </Icon.Button>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};
const RatesNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={NavHeadStyle}>
            <Stack.Screen name="Rates" component={Rates} 
                options={{
                    title:"Rates",
                    headerLeft: () => (
                      <Icon.Button name="arrow-back" size={25} color="white"
                          backgroundColor="#051E75"  onPress={() => navigation.goBack(null)}>
                      </Icon.Button>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export { CompanyNavigator,AboutNavigator,DocumentsNavigator,ContactNavigator,ItemsNavigator,RatesNavigator };