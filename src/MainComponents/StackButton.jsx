import React from 'react';
// import { enableScreens } from 'react-native-screens';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


// You can import from local files
import RequestsScreen from './RequestsScreen';
import JobsScreen from './JobsScreen';
import ExpensesScreen from './ExpensesScreen';
import EstimatesScreen from './EstimatesScreen';
import ScheduleScreen from './ScheduleScreen';
import TimesheetScreen from './TimesheetScreen';
import SearchScreen from './SearchScreen';
import LogoTitle from './LogoTitle';
// enableScreens();
const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

function StackButton(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RequestsScreen" component={RequestsScreen} />
            <Stack.Screen name="JobsScreen" component={JobsScreen} />
            {/* <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    );
}

export default StackButton;