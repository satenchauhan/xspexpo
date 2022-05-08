import React, { useState, useEffect, useRef } from 'react'
import { Text, View, StyleSheet,Modal, TextInput, TouchableOpacity,Animated,Dimensions } from 'react-native';
import {Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function NoteModal(props) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.showModal}
                onRequestClose={() => {
                  setShowModal(!props.showModal);
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.mainNote}>
                        <View style={styles.NoteButtons}>
                            <TouchableOpacity style={{paddingBottom:5}} onPress={() => 
                                    props.setShowModal(!props.showModal)}
                                > 
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingBottom:5}} onPress={() => {console.log('pressed')}}>
                                <Text>Add Note </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingBottom:5}} onPress={() => {console.log('pressed')}}>
                                <Text>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%'}}> 
                            <TextInput
                                style={{padding:10, textAlignVertical:'top'}}
                                underlineColorAndroid="transparent"
                                placeholder="Please write your note here"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin:5,
    },
    modalView: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5);',   
    },
    mainNote:{
        width:"100%",
        minHeight:'40%',
        margin: 10,
        backgroundColor: "#fff",
        borderRadius:10,
        borderWidth:1.5,
        borderColor: '#808080',
        paddingTop: 10,
        alignItems: "center",
        position:'absolute',
        // top:30
    },
    NoteButtons:{

        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between', 
        width:'100%',  
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:1,
    },

    TextSection:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'flex-end',
        justifyContent:'flex-end',
        position:'relative',
        borderRadius:8
    },
    AreaBox: {
        flex:0,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderColor: '#808080',
        borderWidth: 1,
        borderTopWidth:0,
        borderRadius:8,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,   
        backgroundColor:'#fff',
    },
    textArea: {
        textAlignVertical: 'top',
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5,
       
    },
    
});

