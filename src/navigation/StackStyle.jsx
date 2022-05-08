import React,{useState,useContext} from "react";
import { Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation} from '@react-navigation/native';
import styles from '../assets/css/EstimatorHeaderStyle';
import { StackActions } from '@react-navigation/native';
import { UserContext } from "../FrontScreen/context";
const popAction = StackActions.pop(1);


const NavHeadStyle = {
    headerStyle: {
        // backgroundColor:"#051E75",
        backgroundColor:"#3851DD",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const welcomeHeader = (routeName) =>{
    return(
        routeName === "BusinessInfo" || routeName === 'BusinessLogo' ? "#fff" : "#3851DD" , 
        routeName === "BusinessInfo" || routeName === 'BusinessLogo' ? "#fff" : "#3851DD"  
    )
}

const goBackNavigatorButton = (navigation) =>{
    return(
        <TouchableOpacity activeOpacity={0.2}>
            <Icon.Button name="arrow-back" size={25} color="#fff" backgroundColor="#3851DD"
                onPress={() => navigation.goBack(null)}>
            </Icon.Button>
        </TouchableOpacity>
    )
}


// backgroundColor: "#F5F5FF"

const AddRoomHeaderStyle = () => {
    const navigation = useNavigation();
    return (
        {
            title: 'Estimator',
            headerStyle: { 
                backgroundColor: "#fff",
                borderColor:'white',
                elevation:0,        
            },
            headerTintColor: "black",
            headerBackTitle: "Back",
            headerLeft: () => (
                <TouchableOpacity activeOpacity={'#F5F5FF'}>
                    <Icon.Button name="arrow-back" size={25} color="black" underlayColor="#fff" backgroundColor="#fff"
                        onPress={() => navigation.goBack(null)}>
                    </Icon.Button>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={Stackstyles.common}>
                    <TouchableOpacity style={styles.createBtn} onPress={() => console.log('Pressed')} >
                        <Text style={styles.Btn}>Create</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    )
}
const StackHeadLeftStyle = () => {
    const navigation = useNavigation();
    return (
        {
            headerLeft: () => (
                <Icon.Button name="arrow-back" size={25} color="white" style={{ borderColor: 'white' }}
                    backgroundColor="#3851DD" onPress={() => navigation.goBack(null)}>
                </Icon.Button>
            )
        }
    )
}

const StackHeadClientStyle = () => {
    const navigation = useNavigation();
    return (
        {
            title: 'Client',
            headerLeft: () => ( goBackNavigatorButton(navigation) ),
            headerRight: () => (
                <View style={Stackstyles.common}>
                    <TouchableOpacity style={styles.createBtn} onPress={() => console.log('Pressed')} >
                        <Text style={{ color: '#fff', fontSize: 18, marginRight: 20 }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    )
}
const StackHeadNewClient = () => {
    const navigation = useNavigation();
    return (
        {
            title: 'New Client',
            headerLeft: () => ( goBackNavigatorButton(navigation) ),
            headerRight: () => (
                <View style={Stackstyles.common}>
                    <TouchableOpacity style={styles.createBtn} onPress={() => console.log('Pressed')} >
                        <Text style={Stackstyles.saveBtn}>Save</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    )
}
const StackHeadMenubarStyle=()=>{
    const navigation = useNavigation();
        return (
            {
                headerLeft: () => (
                <Icon.Button name="menu" size={25} color="white" style={{backgroundColor:"#3851DD",borderColor:'#3851DD'}}
                onPress={() => navigation.openDrawer()} > 
                </Icon.Button>
                ), 
            }
        )
    }

// const navigation = useNavigation();
const WelcomeHeaderStyle = ({navigation, route}) => {
    const routeName = route.name;
    return (
        {
            title:'',
            headerStyle: { 
                backgroundColor: routeName === "BusinessInfo" || routeName === "BusinessLogo" ? "#3851DD" : "#fff",
                elevation:0,  
            },
            headerLeft: () => (
                <TouchableOpacity activeOpacity={0.2}>
                    <Icon.Button name="arrow-back" size={25} underlayColor=""
                        color={routeName === "BusinessInfo" || routeName === "BusinessLogo" ? "#fff" : "#3851DD"} 
                        backgroundColor={routeName === "BusinessInfo" || routeName === "BusinessLogo" ? "#3851DD" : "#fff"}
                        onPress={() => navigation.goBack(null)}>
                    </Icon.Button>
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center',}}>
                    <View style={[ Stackstyles.dots, {backgroundColor: welcomeHeader(routeName)}]}></View>
                    <View style={[ Stackstyles.dots, {backgroundColor: welcomeHeader(routeName)}]}></View>
                    <View style={[ Stackstyles.dots, {backgroundColor: welcomeHeader(routeName)}]}></View>
                </View> 
            ),
            headerRight: () => (
                <View style={Stackstyles.common}>
                    <TouchableOpacity style={styles.createBtn} onPress={() => {routeName==='BusinessInfo' ? navigation.navigate('BusinessLogo') : navigation.navigate('ThatsIT')}} >
                        <Text style={{fontSize: 20, marginRight: 20,color: welcomeHeader(routeName)}}>{routeName === 'BusinessInfo' || routeName=== 'BusinessLogo' ? 'Next' : 'Finsh'}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    )
}

const SignHeaderStyle = () => {
    return (
        {
            title: '',
            headerStyle: { 
                backgroundColor: "#fff",
                borderColor:'white',
                elevation:0,        
            },
            headerTintColor:'#3851DD'
        }
    )
}



export {
    NavHeadStyle,
    AddRoomHeaderStyle,
    StackHeadLeftStyle,
    StackHeadClientStyle,
    StackHeadNewClient,
    StackHeadMenubarStyle,
    WelcomeHeaderStyle,
    SignHeaderStyle
};


const Stackstyles = StyleSheet.create({
        common:{
            flexDirection: "row", 
            justifyContent: "flex-end", 
            paddingRight: 10 
        },
        saveBtn:{ 
            backgroundColor:'rgba(256,256,256,0.5)', 
            color: '#fff', 
            fontSize: 18, 
            marginRight: 20, 
            lineHeight:21,
            padding:2.5, 
            paddingLeft:10, 
            paddingRight:10
        },
        dots:{
            width:12, 
            height:12, 
            borderRadius:20, 
            margin:3,
        }

});

