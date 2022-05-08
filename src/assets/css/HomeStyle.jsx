import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        safeContainer: {
            flex: 1,
            backgroundColor: "#F2F6F9",
            // paddingTop: Platform.OS === "android" ? 40 : 0,
            // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
        maninConatiner:{
            flex:1, 
            backgroundColor: "#F2F6F9", 
            flexDirection: 'row', 
            justifyContent: 'center',
            alignItems: "center",
            alignContent: 'center'
        },
        pip:{
            fontSize: 20,
            fontWeight:'bold', 
            textAlign:'center',
            marginTop:20
        },
        chart: {
            height: 120,
            width: 170,
            resizeMode: 'center',
            alignItems: 'center',
            justifyContent: 'center',  
        },
        chartTxt:{
            fontSize:18,
            fontWeight:'bold',
            textDecorationLine: 'underline',
        },
        moneyText:{
            textAlign:'center', 
        },
        centerTxt:{
            fontSize:18,
            margin:5
        },
        appoint:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            alignSelf:'center',
            marginLeft:20,
            marginRight:20
        },
        hrLine:{
            width:'100%',
            alignSelf:'center',
            margin:20,
            borderBottomWidth: 1,
            borderBottomColor: '#b2bec3',
        },
        homeTabs:{
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center', 
        },
        btnCard:{
             width: 100,
             height: 100,
             margin: 4,
             textAlign: 'center',
            //  backgroundColor:"#051E75",
             borderWidth:2,
             borderRadius:8,
             shadowColor:"#3851DD",
             borderColor: "rgba(5, 30, 117, 0.5)",
            //  shadowOffset: {
            //     width: 2,
            //     height: 2,
            //  },
            //  shadowOpacity: 0.5,
             shadowRadius:5,
             elevation: 10
        },
        bdg:{
            position: 'absolute',
            right: 85,
            top: -7 
        },
});
