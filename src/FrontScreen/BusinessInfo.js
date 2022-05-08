import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Dimensions,Image, TouchableOpacity, TextInput, Platform } from 'react-native';
// import { StatusBar } from "expo-status-bar";
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
// import * as Google from 'expo-google-app-auth';



const BusinessInfo = ({navigation, route}) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View 
                style={[styles.box]}
                animation="fadeInUpBig"
            >   
                 <Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/hlogo.png')}
                    style={[styles.logo]}
                    resizeMode="contain" 
                />
                <Text style={styles.title}>Business Info</Text>
                <View style={{width:358, alignSelf:'center'}}>
                    <Text style={[styles.txt,{fontSize:16}]}>
                         All fields are optional
                    </Text>
                </View>
                <View style={styles.formBox}>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Business Name"
                            placeholderTextColor="rgba(0, 0, 0, 0.6)"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => console.log('onChange')}
                            onEndEditing={()=> console.log('onEditing')}
                        />
                    </View>
                    <View style={[styles.action, {paddingTop:75}]}>
                        <TextInput 
                            placeholder="Phone"
                            placeholderTextColor="rgba(0, 0, 0, 0.6)"
                            style={styles.phoneInpt}
                            autoCapitalize="none"
                            onChangeText={() => console.log('onChange')}
                            onEndEditing={()=> console.log('onEditing')}
                        />
                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor="rgba(0, 0, 0, 0.6)"
                            style={styles.emailInpt}
                            autoCapitalize="none"
                            onChangeText={() => console.log('onChange')}
                            onEndEditing={()=> console.log('onEditing')}
                        />
                    </View>
                    <View style={[styles.action,{paddingTop:75}]}>
                        <TextInput 
                            placeholder="Address"
                            placeholderTextColor="rgba(0, 0, 0, 0.6)"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => console.log('onChange')}
                            onEndEditing={()=> console.log('onEditing')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BusinessInfo;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },

    box: {
        flex: 1,
        backgroundColor: '#3851DD',
    },
    logo: {
        alignSelf:'center',
        width: 100,
        height: 100,
        marginTop:15,
        // transform: [{ rotate: '90deg'}]
    },
    title: {
        fontFamily:'Roboto',
        fontSize:47,
        textAlign:'center', 
        fontWeight:'700', 
        color:'#fff', 
        lineHeight:55
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
        color:'#fff',
        lineHeight:21
    },
    signIn: {
        width:270,
        height:72,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:"#fff"
    },
    textSign: {
        color: '#0A2EFE',
        fontSize: 24,
        fontWeight: 'bold'
    },
    formBox: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:50
    },
    action: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width:330,
        marginTop: 10,
        // width:'100%',
        borderRadius:10,
        padding: 7
    },
    textInput: {
        marginTop: Platform.OS === 'android' ? 0 : 12,
        width:310,
        height:40,
        borderRadius:10,
        padding: 10,
        backgroundColor:'#fff',
        color: '#05375a',
        lineHeight:70,
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.9,
        shadowRadius: 10,
        elevation: 10,
    },
    phoneInpt: {
        marginTop: Platform.OS === 'android' ? 0 : 12,
        width:310,
        height:40,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding: 10,
        backgroundColor:'#fff',
        color: '#05375a',
        lineHeight:70
    },
    emailInpt: {
        marginTop: Platform.OS === 'android' ? 0 : 12,
        width:310,
        height:40,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopWidth:1,
        borderTopColor:'rgba(181, 181, 181, 0.6)',
        padding: 10,
        backgroundColor:'#fff',
        color: '#05375a',
        lineHeight:70,
        marginTop:0
    },
})
