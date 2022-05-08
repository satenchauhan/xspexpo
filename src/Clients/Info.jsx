import React,{useState,useEffect,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Text, View, StyleSheet, 
    Image,Platform, TouchableOpacity, 
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { Button, Card } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const info="info";

const Info = () =>{
    const dBlue ='rgba(5, 30, 117, 1)';
    const dGreen= "rgba(16, 176, 176, 1)";
    const bColor = "rgba(128,128,128, 0.5)";

    return (
            <View style={{flex:1}}> 
                <View style={{flexDirection:'row'}}> 
                    <View style={{width:'50%',height:60, borderWidth:1.7, borderTopWidth:0, borderRightWidth:0, borderColor:bColor}}>
                        <View style={{flex:1, alignItems:'center', marginTop:5}}>
                            <Text style={{fontSize:14.06, lineHeight:25}}>Account Type</Text>
                            <Text style={styles.Txt}>Individual</Text>
                        </View>
                    </View>
                    <View style={{width:'50%', height:60, borderWidth:1.7, borderTopWidth:0, borderColor:bColor}}>
                        <View style={{flex:1, alignItems:'center', marginTop:5}}>
                            <Text style={{fontSize:14.06, lineHeight:25}}>Assigned To</Text>
                            <Text style={styles.Txt}>Tom Stephen</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.titleBox,{borderColor:bColor,}]}>
                    <Text style={[styles.titleTxt,{color:dBlue}]}>Contact Information</Text>
                </View>
                <View style={{borderWidth:1.7, borderTopWidth:0,  borderColor:bColor, padding:10}}>
                    <Text style={{fontSize:12}}>Main</Text>
                    <View style={styles.mainBox}>
                        <Text style={styles.Txt}>902-663-0998</Text>
                        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                            <TouchableOpacity>
                                <AntDesign name="phone" size={22} color={dGreen} style={{marginRight:10}}  />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="message-processing-outline" size={22} color={dGreen} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:12}}>Main</Text>
                        <View style={styles.mainBox}>
                            <Text style={{fontSize:16,color:dGreen,lineHeight:20}}>Daniel.test@gmail.com</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="email-outline"  size={22} color="#00cec9" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            {/* <Text style={{fontSize:12}}>Main</Text>
                            <View style={styles.mainBox}>
                                <Text style={{fontSize:16,color:dGreen,lineHeight:20}}>Daniel.test@gmail.com</Text>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="email-outline"  size={22} color="#00cec9" />
                                </TouchableOpacity>
                            </View> */}
                            <View style={{flex:1,alignItems:'center',padding:20}}>
                                <TouchableOpacity  
                                    onPress={() => console.log('add prop')}
                                    style={{backgroundColor:dBlue, width:344, height:35, elevation:3}}>
                                    <Text style={{fontSize:22, color:'#fff', textAlign:'center', lineHeight:35}}>
                                        Add Another Contact<AntDesign  name="plus" size={20}/></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.titleBox,{borderColor:bColor,}]}>
                    <Text style={[styles.titleTxt,{color:dBlue}]}>Properties</Text>
                </View>
                <View style={{borderWidth:1.7, borderTopWidth:0,  borderColor:bColor, padding:10}}>
                    <Text style={{fontSize:12}}>Main</Text>
                    <View style={styles.mainBox}>
                        <View>
                            <Text style={styles.Txt}>521 Foxlight Circle</Text>
                            <Text style={styles.Txt}>Nepean, Ontarioa, km031</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <SimpleIcon name="arrow-right"  size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:12}}>Main</Text>
                        <View style={styles.mainBox}>
                            <View>
                                <Text style={styles.Txt}>521 Foxlight Circle</Text>
                                <Text style={styles.Txt}>Nepean, Ontarioa, km031</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <SimpleIcon name="arrow-right"  size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center',padding:20}}>
                        <TouchableOpacity  
                            onPress={() => console.log('add prop')}
                            style={{backgroundColor:dBlue, width:344, height:35, elevation:3}}>
                            <Text style={{fontSize:22, color:'#fff', textAlign:'center', lineHeight:35}}>
                                Add Another Property <AntDesign  name="plus" size={20}/></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.titleBox,{borderColor:bColor,}]}>
                    <Text style={[styles.titleTxt,{color:dBlue}]}>Billing Address</Text>
                </View>
                <View style={[styles.billinBox,{borderColor:bColor}]}>
                    <View style={{marginBottom:10}}>
                        <Text style={styles.Txt}>521 Foxlight Circle</Text>
                        <Text style={styles.Txt}>Nepean, Ontarioa, km031</Text>
                    </View>
                </View>
            </View>
    )
}

export {Info, info};

const styles = StyleSheet.create({
    mainBox:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginRight:10
    },
    titleBox:{
        height:30, 
        borderWidth:1.7, 
        borderTopWidth:0,  
        backgroundColor:'rgba(229, 229, 229, 1)'
    },
    titleTxt:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:25, 
        marginLeft:10
    },
    billinBox:{
        borderWidth:1.7, 
        borderTopWidth:0, 
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,  
        padding:10
    },
    Txt:{
        fontSize:16,
        color:"black",
        lineHeight:20
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

