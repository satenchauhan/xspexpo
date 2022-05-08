import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Dimensions,Image, TouchableOpacity, TextInput, Platform } from 'react-native';
// import { StatusBar } from "expo-status-bar";
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { UserContext } from './context';
// import * as Google from 'expo-google-app-auth';



const ThatsIT = ({navigation}) => {
    const {userData, setUserData} = useContext(UserContext);
    const { colors } = useTheme();
    const login = () =>{
        const user = {
            name:"Saten Chauhan",
            email: "saten@gmail.com",
            id: "12345",
            photoUrl: null,
        }
        setUserData(user);
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/Vector.png')}
                    style={styles.thumb}
                    resizeMode="contain" 
                />
                <Text style={styles.title}>That's It</Text>
                <View style={{width:358, alignSelf:'center'}}>
                    <Text style={[styles.txt,{fontSize:16, top:25}]}>
                        We’re all done! Enjoy a 14 day trial on us.
                    </Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.signIn} onPress={login}>
                        <View style={styles.button}>
                            <Text style={styles.textSign}>CREATE A QUOTE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ThatsIT;



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF'
    },
    header:{
        marginTop:50
    },
    headText:{
        fontFamily:'Roboto',
        fontSize:47, 
        fontWeight:'700', 
        color:'#fff',
        textAlign:'center',
    },
    thumb: {
        alignSelf:'center',
        width: 50,
        height: 50,
        marginTop:0,
    },
    title: {
        fontFamily:'Roboto',
        fontSize:47,
        textAlign:'center', 
        fontWeight:'700', 
        color:'#3851DD', 
        lineHeight:55,
        marginTop: 40
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    txt:{
        fontFamily:'Roboto',
        fontSize:18, 
        textAlign:'center', 
        fontWeight:'normal', 
        color:'#3851DD',
        lineHeight:21
    },
    buttonBox: {
        alignItems: 'center',
        marginTop: 70,
    },
    button: {
        width:270,
        height:72,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:"#3851DD"
    },
    textSign: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
