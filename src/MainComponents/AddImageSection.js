import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Modal,StyleSheet, TextInput, Image, ScrollView, TouchableOpacity,TouchableHighlight } from 'react-native';
import {Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RoomStyles } from '../assets/css/RoomStyle';
import AddImageModal from './AddImageModal';

const AddImageSection = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={[imgStyle.noteSection,{height:75}]}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={{marginTop:10}}>
                        <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                            style={{position:'relative', right:10, width:50, height:50, borderRadius:50}}
                            onPress={() => {props.setShowFooter(true); props.setShowCamera(false); }}
                        >
                            <MaterialCommunityIcons style={{textAlign:'center',lineHeight:50,color:"gray"}} name="reply" size={32} />
                        </TouchableHighlight>
                    </View>
                    <View style={{marginTop:10, marginLeft:-8}}>
                        <TouchableOpacity style={imgStyle.imgPlus}  onPress={() => setShowModal(true)}>
                            <Text>Add Photo</Text>
                            <View style={imgStyle.imgIcon}><AntDesign  name="plus" size={25}/></View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ScrollView horizontal={true} style={{flexDirection:'row' ,marginLeft:10, marginTop:5}}>
                            <View style={imgStyle.imgDiv}>
                                <Image style={imgStyle.img} source={require('../assets/logos/logo.png')} />
                            </View>
                            <View style={imgStyle.imgDiv}>
                                <Image style={imgStyle.img} source={require('../assets/logos/logo.png')} />
                            </View>
                            <View style={imgStyle.imgDiv}>
                                <Image style={imgStyle.img} source={require('../assets/logos/logo.png')} />
                            </View>
                            <View style={imgStyle.imgDiv}>
                                <Image style={imgStyle.img} source={require('../assets/logos/logo.png')} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
                {  showModal ? (
                        <AddImageModal setShowModal={setShowModal} showModal={showModal} />
                ): null } 
        </View>
    )
}

export default AddImageSection;


const imgStyle = StyleSheet.create({
   
    imgSection:{
        position:'relative',
        bottom:0,
        marginTop:5,
        marginLeft:7,  
        marginRight:7,  
    },
    imgPlus:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white', 
        borderRadius:8, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowOpacity: 0.5,
        elevation:5, 
        padding:6,
    },
    imgIcon:{
        borderRadius:100, 
        paddingLeft:2, 
        marginLeft:3, 
        color:'black',
        opacity: 0.7
    },
    imgDiv:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:40,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowOpacity: 1,
        elevation:5, 
        margin:5,
        borderWidth:1,
        borderColor:'#E5E5E5',
        borderRadius:8,   
    },
    img: {
        height: 35,
        width: 35,
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'center',     
    },
})
