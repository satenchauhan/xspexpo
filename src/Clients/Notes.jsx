import React,{useState,useEffect,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Text, View, StyleSheet, 
    Image,Platform, TouchableOpacity, 
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { Button, Card } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const notes = "notes";

const Notes = () => {
    return (
        <View style={styles.outerBox}>
            <View style={styles.innerBox}>
                <Text style={{color:'rgba(5, 30, 117, 1)', fontSize:30}}>Notes Page</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </View>
    )
}

export {Notes, notes}

const styles = StyleSheet.create({
    outerBox:{
        flex:1, 
        alignItems:'center', 
        backgroundColor:'#fff',  
        padding:1.5
    },
    innerBox:{
        borderWidth:1.7, 
        borderTopWidth:0, 
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5, 
        borderColor:'rgba(128,128,128, 0.5)', 
        padding:40
    }
})
