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
import Info from '../Clients/Info';

const TabSection = (props) => {
    const [value] = useState([
        { key: 'info'},
        { key: 'requests',},
        { key: 'estimates'},
        { key: 'billings'},
        { key: 'jobs'},
        { key: 'notes'},
        { key: 'tasks'},
    ]);

    const [tabName, setTabName] = useState('')
   
    const myRef = useRef(null);

    const dBlue ='rgba(5, 30, 117, 1)';
    const dGreen= "rgba(16, 176, 176, 1)";
    const bColor = "rgba(128,128,128, 0.5)";

    // console.log(props.routeName[1].key)
    const showPressed = (text) =>{
        setTabName(text);
        props.showTab(text)
    }

    // console.log("tabname "+tabName);
    useEffect(() => {
        // setPress(false);
        setTabName(value[0].key);
    }, [])
    return (
        <View style={[styles.tabSection]}>
            <ScrollView horizontal={true}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableHighlight 
                        activeOpacity={0.2} underlayColor="lightgray"
                        style={[styles.buttonSection,{borderBottomWidth: value[0].key === tabName  ? 0 : 2}]}
                        onPress={(e) => showPressed(props.routeName[0].key)}
                    >
                    <Text style={[styles.btnName,{color:'black'}]} >{props.routeName[0].title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight   
                        activeOpacity={0.2} underlayColor="lightgray"
                        style={[styles.buttonSection,{borderBottomWidth: value[1].key === tabName  ? 0 : 2}]}
                        onPress={() => showPressed(props.routeName[1].key)}
                    >
                    <Text style={styles.btnName}>{props.routeName[1].title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        activeOpacity={0.2} underlayColor="lightgray"
                        style={[styles.buttonSection,{borderBottomWidth: value[2].key === tabName  ? 0 : 2}]}
                        onPress={() => showPressed(props.routeName[2].key)}
                    >
                    <Text style={styles.btnName}>{props.routeName[2].title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        activeOpacity={0.2} underlayColor="lightgray"
                        style={[styles.buttonSection,{borderBottomWidth: value[3].key === tabName  ? 0 : 2}]}
                        onPress={() => showPressed(props.routeName[3].key)}
                    >
                    <Text style={styles.btnName}>{props.routeName[3].title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        activeOpacity={0.2} underlayColor="lightgray"
                        style={[styles.buttonSection,{borderBottomWidth: value[4].key === tabName  ? 0 : 2}]}
                        onPress={() => showPressed(props.routeName[4].key)}
                    >
                    <Text style={styles.btnName}>{props.routeName[4].title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        activeOpacity={0.2} underlayColor="lightgray"
                        style={[styles.buttonSection,{borderBottomWidth: value[5].key === tabName  ? 0 : 2}]}
                        onPress={() => showPressed(props.routeName[5].key)}
                    >
                    <Text style={styles.btnName}>{props.routeName[5].title}</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )
}

export default TabSection

const styles = StyleSheet.create({
    tabSection:{
        flex:1, 
        backgroundColor:'#fff',  
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderColor:"rgba(128,128,128, 0.3)",
        borderTopWidth:2.5,
        borderLeftWidth:2.5,
        borderRightWidth:2.5,
        height:50,
    },
    buttonSection:{
        marginTop:-2,   
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderColor:"rgba(128,128,128, 0.3)",
        borderTopWidth:0.2,
        borderRightWidth:1,
    },
    btnName:{
        padding:8,
        fontSize:16, 
        fontWeight:'500',
        lineHeight:30
    },
    
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
