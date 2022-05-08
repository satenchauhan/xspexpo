import React,{useState,useRef} from "react";
import {StyleSheet, Text, TouchableOpacity, View,Animated,Dimensions } from "react-native";
import {Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DeleteItemPopUp = (props) => {
  return (
        <View style={{flex:1, position:'absolute'}}>
            <View style={styles.deleteBox}>
                <View style={{marginBottom:0}}>
                    <View style={{position:'relative', bottom:8}}>
                        <View style={styles.menuItem}>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                            <Text style={{ color: "black"}}>Delete Item Confirm ?</Text>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:-2.5}} >
                    <View style={styles.menuItem}>
                        <TouchableOpacity onPress={() => {
                                props.deleteItem(props.itemId);
                            }}
                        >
                            <View style={{flexDirection:'row'}}>
                                <MaterialIcons name="delete-outline" size={25} color="green" />
                                <Text style={{color:'green', lineHeight:26}}>  Yes</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{height: 25,width: 2,backgroundColor: '#909090',}}></View>
                        <TouchableOpacity onPress={() => {props.deleteClose(); props.setShowPopUp(false)}}>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name="close" size={21} color="red" />
                                <Text style={{color:'red',lineHeight:22}}> No</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>    
  );
};


export default DeleteItemPopUp;

const styles = StyleSheet.create({
       deleteBox:{
           position:'relative', 
           top:-154, 
           backgroundColor:'#fff',
           paddingTop:7, 
           paddingLeft:10,
           paddingRight:10,
           borderWidth:1.5, 
           borderColor:"rgba(128,128,128,0.3)", 
           borderRadius:8
        },
        menuItem:{ 
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor:'#0000',
        },
        closeBtn:{
            flex:1, 
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent:'flex-end',
        },
        editBtn:{
          marginTop:5,
          borderColor:'black'
      },
  });
