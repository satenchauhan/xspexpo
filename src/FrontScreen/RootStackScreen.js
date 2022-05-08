import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity, HeaderTitle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome  from './Welcome';
import BusinessInfo  from './BusinessInfo';
import BusinessLogo  from './BusinessLogo';
import ThatsIT from './ThatsIT';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { WelcomeHeaderStyle,SignHeaderStyle } from '../navigation/StackStyle';


const RootStack = createStackNavigator();

const RootStackScreen = () => {
    return (
    <RootStack.Navigator >
        <RootStack.Screen name="WelcomePage" component={Welcome} options={{headerShown: false}} />
        <RootStack.Screen name="BusinessInfo" component={BusinessInfo} options={WelcomeHeaderStyle} />
        <RootStack.Screen name="BusinessLogo" component={BusinessLogo} options={WelcomeHeaderStyle} />
        <RootStack.Screen name="ThatsIT" component={ThatsIT} options={WelcomeHeaderStyle} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} options={SignHeaderStyle} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
    ) 
}


export default RootStackScreen;

