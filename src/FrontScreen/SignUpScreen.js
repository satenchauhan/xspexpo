import React,{useState,useEffect, useContext} from 'react'
import { View, Text, TouchableOpacity, TextInput,Platform,StyleSheet,Image,StatusBar,Alert, ActivityIndicator} from 'react-native';
// import { StatusBar } from "expo-status-bar";
import * as Animatable from 'react-native-animatable';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './context';

const SignInScreen = ({navigation}) => {
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [googleSignup, setGoogleSignup] = useState();
    const [facebookSignup, setFacebookSignup] = useState();
    const [appleSignup, setAppleSignup] = useState();
    const [data, setData] = useState({
        useremail: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { colors } = useTheme();

    const {userData, setUserData} = useContext(UserContext);
     // Google Login Method
     const handleGoogleSignup = async () =>{
        setGoogleSignup(true);
        const config = {
            iosClientId:'482485796949-lm54vvcv1kl3tvbie2el7l80s1a1vldk.apps.googleusercontent.com',
            androidClientId: '482485796949-bqv6lrjppqbfa3oea6l82rdf9o9gnbpb.apps.googleusercontent.com',
            scopes: ['profile','email']
        };
        await Google.logInAsync(config)
            .then((result) =>{
                const {type, user} = result;
                if(type === 'success'){
                    const {email, name, photoUrl} = user;
                    setUserData(user);
                    handleMessage('Google signin successfull','success');
                    AsyncStorage.multiSet([['useremail',user.email],['fname', user.name],['userImage', user.photoUrl]]);
                }else{
                    handleMessage('Google signin was cancelled');
                }
                setGoogleSignup(false);
            })
        .catch(error => {
            console.log(error);
            handleMessage('An error occured, check your network and try again ');
            setGoogleSignup(false);
        })
    }

    //Facebook Login Method
    const handleFacebookSignup = async () =>{
        setFacebookSignup(true);
        try {
                await Facebook.initializeAsync({
                    appId: '785630895433467',
                });
                const { type,token, expirationDate, permissions,declinedPermissions} = await Facebook.logInWithReadPermissionsAsync({
                        permissions: ['public_profile','email'],
                });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
                const profile = await response.json();
                // console.log(await profile.picture.data.url);
                const user = await {
                    name: profile.name,
                    email: profile.email,
                    id: profile.id,
                    photoUrl: profile.picture.data.url,
                }
                setUserData(user);
                AsyncStorage.multiSet([['useremail', user.email],['fname', user.name],['userImage', user.photoUrl]]);
            } else {
                // type === 'cancel'
                setFacebookSignup(false);
                setUserData(null);
            }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
          setFacebookSignup(false);
          setUserData(null);
        }
    }
    //Apple Login Method
    const handleAppleSignup = () =>{
        setAppleSignup(true); 
    }

    useEffect(() => {
        setGoogleSignup(false);
        setFacebookSignup(false);
        setAppleSignup(false);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(16, 176, 176, 1)' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>VERYGOOD </Text>
                <Text style={{color:'#fff', textAlign:'center'}}>SignUp</Text>
            </View>
        <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
            <Text style={[styles.text_footer]}>Email </Text>
            <View style={styles.action}>
                <Fontisto 
                    style={{lineHeight:30}}
                    name="email"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email Address"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {lineHeight:50}]}
                    autoCapitalize="none"
                    onChangeText={(val) => {}}
                    onEndEditing={(e) => {}}
                />
                {data.check_textInputChange ? 
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green"size={20} />
                </Animatable.View>
                : null}
            </View>
            {/* Space for Password Input Field Ui */}
            <View style={[styles.button,{marginTop:30}]}>
                <TouchableOpacity
                    style={[styles.signIn,{backgroundColor: 'rgba(16, 176, 176, 1)',}]}
                    onPress={() => {}}
                >
                <View style={styles.signIn}>
                    <Text style={[styles.textSign, {color:'#fff'}]}>Signup</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.ORFlex}>
                <View style={styles.ORBorder}></View>
                <Text style={{color:'gray'}}> OR </Text>
                <View style={styles.ORBorder}></View>
            </View>
            <View style={[styles.button,{marginTop:10}]}> 
                {/* Google Signup */}
               {!googleSignup && (  
                    <TouchableOpacity onPress={handleGoogleSignup} style={styles.signWith}>    
                        <View style={styles.IconTitle}>
                            <Fontisto name="google"  color="#db3236" size={28}  />
                            <Text google={true} style={[styles.textSign, {marginLeft:8,lineHeight:35,color: '#db3236'}]}>Signup with Google {''}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                {googleSignup && (
                    <TouchableOpacity google={true} disabled={true} style={styles.signWith} >    
                        <View style={styles.IconTitle}  google={true} disabled={true}>
                            <ActivityIndicator size="large" color="#00ff00" />
                            <Text style={[styles.textSign, {marginLeft:8,lineHeight:35,color: '#db3236'}]}>Signup with Google {''}</Text>
                        </View>
                    </TouchableOpacity>           
                )}
                {/* Facebook */}
                {!facebookSignup && (  
                <TouchableOpacity onPress={handleFacebookSignup} style={styles.signWith}>  
                    <Text>{'    '}</Text>   
                    <View style={styles.IconTitle}>
                        <MaterialCommunityIcons  name="facebook"  color="#3b5998" size={40}  />
                        <Text style={[styles.textSign,{marginLeft:5,lineHeight:40,color:'#3b5998'}]}>Signup with Facebook </Text>
                    </View>
                </TouchableOpacity>
                )}
                {facebookSignup && (
                <TouchableOpacity facebook={true} disabled={true} style={styles.signWith}>    
                    <View style={styles.IconTitle} facebook={true} disabled={true}>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text style={[styles.textSign, {marginLeft:5,lineHeight:40,color: '#3b5998'}]}>Signup with Facebook</Text>
                    </View>
                </TouchableOpacity>           
                )}

                {/* Apple Signup */}
                {!appleSignup && (
                <TouchableOpacity onPress={handleAppleSignup} style={styles.signWith}>   
                    <View style={styles.IconTitle}>
                        <Fontisto name="apple"  color="black" size={33}  />
                        <Text style={[styles.textSign,{marginLeft:8,lineHeight:35,color:'black'}]}>Signup with Apple {'   '}</Text>
                    </View>
                </TouchableOpacity>
                )}
                {appleSignup && (
                <TouchableOpacity apple={true} disabled={true} style={styles.signWith}>   
                    <View style={styles.IconTitle} apple={true} disabled={true}>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text style={[styles.textSign, {marginLeft:8,lineHeight:35,color: 'black'}]}>Signup with Apple {'   '}</Text>
                    </View>
                </TouchableOpacity>           
                )}

                {/* No account */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={styles.signUp}
                >    
                    <Text style={{ fontSize: 14}}>Already have an account ? </Text>
                    <Text style={[styles.textSign, {color: '#009387', fontSize:15}]}>SignIn !</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignSelf:'center',
        // justifyContent:'center',
        backgroundColor: 'rgba(16, 176, 176, 1)',
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        marginTop:30,
        paddingHorizontal: 100,
        paddingBottom: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        // marginTop: 40
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        // borderColor: '#f2f2f2',
        borderRadius:10,
        padding: 7
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
    },
    signWith: {
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width: '100%',
        height: 45,
        borderRadius: 10,  
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15
    },
    signUp: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        marginTop: 25
    },
    IconTitle:{
        flex:1,
        flexDirection:'row', 
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    SocialIcon:{
        height: 50,
        width: 40,
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'center',  
        marginRight:10,
    },
    ORFlex:{
        flexDirection:'row', 
        alignItems:'center', 
        marginTop:25, 
        paddingLeft:50, 
        paddingRight:50
    },
    ORBorder:{
        flex:1,
        width:'100%',
        borderWidth:0.5, 
        borderColor:'gray'
    }
})

/*
<Text style={[styles.text_footer, {color: colors.text,marginTop:15}]}>Password</Text>
<View style={styles.action}>
    <Feather 
        style={{lineHeight:30}}
        name="lock"
        color={colors.text}
        size={20}
    />
    <TextInput 
        name="password"
        placeholder="Your Password"
        placeholderTextColor="#666666"
        secureTextEntry={data.secureTextEntry ? true : false}
        style={[styles.textInput, {color: colors.text}]}
        autoCapitalize="none"
        onChangeText={(val) => {}}
        onEndEditing={(e) => {}}
    />
    <TouchableOpacity >
        {data.secureTextEntry ? 
        <Feather style={{lineHeight:30}}
            name="eye-off"
            color="grey"
            size={20}
        />
        :
        <Feather 
            name="eye"
            color="grey"
            size={20}
        />
        }
    </TouchableOpacity>
</View> 
*/
