import React from 'react';
import { StyleSheet} from 'react-native';

const PanelStyle =  StyleSheet.create({
    checkBoxFlex:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        textAlign:'right',
        marginLeft:5,
        
    },
    checkBox:{
        width:25,
        height:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        marginLeft:49,
        borderWidth:5,
        borderRadius:3, 
        backgroundColor:'white',
        borderColor:'white',
        position:'relative',
        top:14,
       

    },
    iconsFlex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:5,
        paddingRight:5
    },
    Box:{
        marginTop:5,
        width:70,
        height:100,
        paddingTop:5,
        flexDirection:'column',
        alignItems:'center',
        borderRadius:5, 
        backgroundColor:'white',
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderWidth:1,
        borderColor:'gray',
        zIndex:2,
        elevation: -5,   
    },
    noBox:{
        marginTop:5,
        width:70,
        height:100,
        paddingTop:5,
        flexDirection:'column',
        alignItems:'center',
        borderRadius:5, 
        backgroundColor:'white',
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderWidth:1,
        borderColor:'white',
        zIndex:2,
        elevation: -5,   
    },
    ItemIcon:{
        flex:1,
        alignItems:'center',
        height:100,
        paddingTop:5
    },
    IconTitle:{
        fontSize:12
    }

});

export {PanelStyle};