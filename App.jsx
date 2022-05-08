import React, {useState, useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from './src/navigation/MainTabScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackScreen from './src/FrontScreen/RootStackScreen';
import { UserContext } from './src/FrontScreen/context';


const Stack = createStackNavigator();
const App =({navigation}) => {
    const [userData, setUserData] = useState(null);
    const route = {
        prefixes: ['https://demoapp.com','jordanapp://'],
          // prefixes: ['satenapp://'],
          config: {
              WelcomePage: "welcome"
          }
      } 

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <NavigationContainer linking={route}>
                {userData === null ?
                <RootStackScreen />
                :
                <MainTabScreen /> 
                }
            </NavigationContainer>
        </UserContext.Provider>
    );
}

export default App;


/* 
{userData === null ?
            <RootStackScreen />
            :
            <MainTabScreen /> 
            }

*/

