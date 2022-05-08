import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Text, View, StyleSheet, Image,Platform, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';


const  ClientDetails= ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#F5F5FF',}}>
            <StatusBar backgroundColor="rgba(83, 83, 83, 0.58)"  style="light"  />
            <View style={styles.mainContainer}>
                <Image style={styles.cliImage}  source={require('../assets/logos/cli-image.jpg')}/>
            </View> 
            <View style={styles.tabSection}>
                <View style={styles.googleBox}>
                    <Text style={{fontSize:22, color:'#fff'}}>Goolge</Text>
                    {/* <View style={{flex:1}}></View> */}
                    <TouchableOpacity>
                        <MaterialIcons  name="location-on"  size={35} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View> 
        </SafeAreaView>
    );
}


export default ClientDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        alignContent: 'center',
        position:'relative',
        bottom:40,
    },
    cliImage: {
        // flex:1,
        width: '100%', 
        height: 200,
        resizeMode:'cover' 
    },
    tabSection:{
        flex:1, 
        padding:5,
        position:'relative',
        bottom:115
    },
    googleBox:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'rgba(255,255,255,0.2)',
        padding:5, 
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        // position:'absolute',
        // top:-100
    }
});

/* 
borderRadius:10,
borderColor:"rgba(128,128,128, 0.3)",
borderWidth:2,

borderColor:'black',
color:'rgba(128,128,128, 0.5)'
verticleLine: {
    height: 20,
    width: 1,
    backgroundColor: '#909090',
    // padding:0,
},
line:{
    borderBottomWidth:1,
    color:'#b2bec3',
    width:'100%',
    marginBottom:10, 
    opacity:0.1 
},
hrLine:{
    borderBottomWidth:1, 
    color:'black',
    opacity:1
}, */