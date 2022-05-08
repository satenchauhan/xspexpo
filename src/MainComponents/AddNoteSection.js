import React, { useState, useEffect, useRef } from 'react'
import { Text, View,StyleSheet, Modal, TextInput, TouchableOpacity,Animated,Dimensions,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RoomStyles } from '../assets/css/RoomStyle';
import NoteModal from './NoteModal';


const AddNoteSection = (props) =>{
    const  textScreenWidth = Dimensions.get('screen').width-25
    const textScreenHeight = Dimensions.get('screen').height/4
    const [showAddButton, setShowAddButton] = useState(true);
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showField, setShowField] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const BorderColore = useRef(new Animated.Value(0)).current;
    const BorderWidth = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        setShowAddButton(true);
        setShowCloseBtn(false);
        setShowField(false)
    }, []);
    return (
        <View style={[noteStyle.noteSection,{height:70}]}>
            <View style={{flexDirection:'row', marginTop:10}}>
                <View>
                    <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                            style={{position:'relative',right:10,width:50, height:50, borderRadius:50}}
                            onPress={() => {props.setShowFooter(true); props.setShowPen(false); }}
                    >
                        <MaterialCommunityIcons style={{textAlign:'center',lineHeight:50,color:"gray"}} name="reply" size={32} />
                    </TouchableHighlight>
                </View>
                <View style={{marginTop:10}}>
                    <TouchableOpacity style={noteStyle.notePlus}  onPress={() => setShowModal(true)}>
                       <Text>Add Note {' '}</Text>
                       <View style={noteStyle.noteIcon}><AntDesign  name="plus" size={25}/></View>
                    </TouchableOpacity>
                </View>
            </View>
            {  showModal ? (
              <NoteModal setShowModal={setShowModal} showModal={showModal} />
            ): null } 
        </View>
    )
}


export default AddNoteSection;


const noteStyle = StyleSheet.create({
   
    noteSection:{
        position:'relative',
        bottom:0,
        marginTop:5,
        marginLeft:7,  
        marginRight:7,  
    },
    notePlus:{
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
    noteIcon:{
        borderRadius:100, 
        paddingLeft:2, 
        marginLeft:3, 
        color:'black',
        opacity: 0.7
    }
})




