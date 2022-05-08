import React,{useState,useRef} from "react";
import {StyleSheet, Text, TouchableOpacity, View,Animated,Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RoomMenuPopUp = (props) => {
  return (
        <View style={{flex:1,position:'absolute'}}>
            <View style={styles.innerSection}>
                <View style={{marginBottom:0}}>
                    <TouchableOpacity onPress={()=>{props.MenuAnimateClose()}}>
                        <View style={styles.menuItem}>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                            <MaterialIcons name="close" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:18}}>
                    <TouchableOpacity onPress={()=> {
                        props.deleteRoom(props.id)
                        }}>
                        <View style={styles.menuItem}>
                            <MaterialIcons name="delete-outline" size={24} color="black" />
                            <Text style={{ color: "black"}}>Delete This Room</Text>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:8}} >
                    <TouchableOpacity onPress={()=> props.duplicateRoom(props.id, props.roomName)}>
                        <View style={styles.menuItem}>
                            <MaterialCommunityIcons name="content-duplicate" size={20} color="black" />
                            <Text style={{ color: "black" }}>{' '} Duplicate This Room</Text>
                            <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* ):null}  */}
        </View>    
  );
};


export default RoomMenuPopUp;

const styles = StyleSheet.create({
        innerSection:{
            position:'relative', 
            bottom:85, 
            backgroundColor:'#fff',
            padding:10, 
            borderWidth:2, 
            borderColor:"rgba(128,128,128,0.3)",
            shadowOpacity: 0.5, 
            elevation:10,  
            borderRadius:8
        },
        menuItem:{ 
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor:'#0000'
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
