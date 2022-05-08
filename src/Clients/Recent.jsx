import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Text, View, StyleSheet, Image,Platform, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const  Recent = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#F5F5FF',}}>
            <View style={styles.mainContainer}>
                 <Text>Recent Clients</Text>
            </View> 
        </SafeAreaView>
    )
}


export default  Recent;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        alignContent: 'center',
        // backgroundColor:"#051E75"
        backgroundColor:"#F5F5FF"
    },
})
