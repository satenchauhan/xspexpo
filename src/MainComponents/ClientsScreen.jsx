import React,{useState,useEffect,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import { Info, info } from '../Clients/Info';
import TabSection from '../Clients/TabSection';
import { Estimates,  estimates } from '../Clients/Estimates';
import { Requests, requests } from '../Clients/Requests';
import { Billings, billings } from '../Clients/Billings';
import { Jobs, jobs } from '../Clients/Jobs';
import { Notes, notes } from '../Clients/Notes';

const  ClientsScreen= ({navigation}) => {
    const [press, setPress] = useState(false);
    const [getName, setGetName] = React.useState('');
    const [routes] = useState([
        { key: 'info', title: 'INFO' },
        { key: 'requests', title: 'REQUESTS' },
        { key: 'estimates', title: 'ESTIMATES' },
        { key: 'billings', title: 'BILLINGS' },
        { key: 'jobs', title: 'JOBS' },
        { key: 'notes', title: 'NOTES' },
        { key: 'tasks', title: 'TASK' },
    ]);
    const myRef = useRef(null);
    const dBlue ='rgba(5, 30, 117, 1)';
    const dGreen= "rgba(16, 176, 176, 1)";
    const bColor = "rgba(128,128,128, 0.5)";


    // console.log(routes[1].title);
    const showTab = (text) =>{
        setGetName(text);
    }
    useEffect(() => {
        setPress(false);
        setGetName(routes[0].key)
        
    }, [])
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff',}}>
             <StatusBar backgroundColor="#3851DD"  style="light"  />
           <ScrollView horizontal={false} stickyHeaderIndices={[1]}>
                <View style={styles.mainContainer}>
                    <ImageBackground style={styles.cliImage}  source={require('../assets/logos/cli-image.jpg')}> 
                        <View style={{height:110}}></View>
                        <View style={styles.googleBox}>
                            <Text style={{fontSize:22, color:'#fff', lineHeight:25}}>Goolge</Text>
                            <TouchableOpacity>
                                <MaterialIcons  name="location-on"  size={30} color='#fff' style={{lineHeight:28}} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View> 
                <View style={{backgroundColor:'#fff',paddingTop:-10}}>
                    <TabSection 
                        routeName={routes}
                        showTab={showTab}
                    />
                </View>
                <View style={[styles.cliectSection,{borderColor:bColor}]}>
                    <View style={{flex:1}}>
                        {/* <View style={styles.clientBox}>
                            <View style={styles.clientBox}>
                                <Icon name="user" color={dBlue} size={18}  />
                                <Text style={styles.cltName}>Daniel Green</Text>
                            </View>
                            <View style={[styles.clientBox,{marginRight:30}]}>
                                <MaterialIcons name="label" color={dGreen} size={23} style={{lineHeight:21}}  />
                               <Text style={{fontSize:16, marginLeft:10.8, lineHeight:18.75}}>Client</Text>
                            </View>
                        </View> */}
                        <View style={[styles.clientBox, {marginTop:8, marginRight:10}]}>
                            <View style={styles.clientBox}>
                                <Icon name="user"  color={dBlue}  size={18}  />
                                <Text style={[styles.cltName,{marginLeft:10}]}>Daniel Green</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                <MaterialIcons name="label" color={dGreen} size={23} style={{lineHeight:21}}  />
                                <View style={{width:39}}><Text>{' '}</Text></View>

                                <Text style={[styles.Txt]}>Client</Text>
                                <View ><Text>{' '}</Text></View>
                            </View>
                        </View>
                        <View style={[styles.clientBox, {marginTop:8, marginRight:10}]}>
                            <View style={styles.clientBox}>
                                <Icon name="building"  color={dBlue}  size={18}  />
                                <Text style={[styles.Txt,{marginLeft:10}]}>Big D`s Gargen Center</Text>
                            </View>
                            <View style={styles.clientBox}>
                                <Text style={styles.Txt}>Balance:</Text>
                                <Text style={[styles.Txt,{marginLeft:5}]}>$0.00</Text>
                            </View>
                        </View>
                    </View>
                </View> 
                {/* <Text>{'   '}</Text> */}
            {/* Tab Screen */}
            {info===getName ? 
               <Info name={routes} />
            : null}
            {estimates===getName ? 
               <Estimates />
            : null}
            {requests===getName ? 
               <Requests />
            : null}
            {billings===getName ? 
               <Billings />
            : null}
            {jobs===getName ? 
               <Jobs />
            : null}
             {notes===getName ? 
               <Notes />
            : null}
           </ScrollView>
        </SafeAreaView>
    );
}


export default ClientsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
      /*justifyContent: 'center',
        alignItems: "center",
        alignContent: 'center',
        position:'relative',
        bottom:40, 
     */
    },
    cliImage: {
        // flex:1,
        position:'relative',
        width: '100%', 
        height: 143,
        resizeMode:'cover',
        // padding:2
    },
    googleBox:{
        // flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        backgroundColor:'rgba(255,255,255,0.2)',
        padding:5, 
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        marginLeft:2,
        height:33,
    },
    cliectSection:{
        flex:1,
        padding:10,
        marginTop:10,
        borderWidth:1.7, 
        borderTopWidth:0,   
    },
    clientBox:{
        flexDirection:'row',
        alignItems:'flex-start', 
        justifyContent:'space-between'
    },
    cltName:{
        fontSize:18, 
        marginLeft:10, 
        lineHeight:22, 
        fontWeight:'bold'
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