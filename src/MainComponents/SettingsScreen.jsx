import React,{useState} from 'react';
import {SafeAreaView,Text, View,StyleSheet, TextInput, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {  } from 'react-native-keyboard-aware-scrollview';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome';


function SettingsScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <StatusBar backgroundColor="rgba(83, 83, 83, 0.58)"  style="light"  />
                <View style={styles.SettingArea}>
                    <View style={{marginLeft:0,flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                        <View>
                            <Text>Enable metric measurements as default </Text>
                        </View>  
                        <View style={{width:40}}>
                            <Text>{' '}</Text>
                        </View>      
                        <Switch

                            trackColor={{ false: "gray", true:"rgba(16, 176, 176, 0.6)" }}
                            thumbColor={isEnabled ? "rgba(16, 176, 176, 1)" : "rgba(16, 176, 176, 1)"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={{margin:10,flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                        <View>
                            <Text>What is your hourly rate ?</Text>
                        </View>  
                        <View style={{marginLeft:5,borderWidth:1, borderColor:'gray', borderRadius:50,transform: [{ rotate: '180deg'}]}}>
                            <MaterialCommunityIcons name="exclamation" size={20} color='black'  onPress={() => {MenuAnimateExpan()}} />
                        </View>
                        <View style={{width:80}}>
                            <Text>{''}</Text>
                        </View> 
                        <View  style={{ width:70, borderBottomWidth:2, borderColor:"black"}}>   
                            <TextInput
                                style={{width:70}}
                                keyboardType="default"
                                placeholder={"$ 10    /Hr"}
                                placeholderTextColor={'black'}
                            />
                        </View>  
                    </View>
                </View>  
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#ecf0f1',
      padding:10
    },
    SettingArea:{
        width:'100%'
    }
   
});