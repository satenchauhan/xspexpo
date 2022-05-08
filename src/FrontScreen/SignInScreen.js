import React,{useState,useEffect,useContext} from 'react'
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
    const [googleLogin, setGoogleLogin] = useState();
    const [facebookLogin, setFacebookLogin] = useState();
    const [appleLogin, setAppleLogin] = useState();
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
    
    const handleMessage = (message, type= 'FAILED') =>{
        setMessage(message);
        setMessageType(type);
    }
    // Google Login Method
    const handleGoogleLogin = async () =>{
        setGoogleLogin(true);
        const config = {
            // iosClientId:'482485796949-lm54vvcv1kl3tvbie2el7l80s1a1vldk.apps.googleusercontent.com',
            androidClientId: '870808884874-7m0dn89trf9bfq93lkicoejqls7hsd9i.apps.googleusercontent.com',
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
                setGoogleLogin(false);
            })
        .catch(error => {
            console.log(error);
            handleMessage('An error occured, check your network and try again ');
            setGoogleLogin(false);
        })
    }
    //Facebook Login Method
    const handlefacebookLogIn = async () =>{
        setFacebookLogin(true);
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
                setFacebookLogin(false);
                setUserData(null);
            }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
          setFacebookLogin(false);
          setUserData(null);
        }
    }
    
    //Apple Login Method
    const handleAppleLogIn = () =>{
        setAppleLogin(true);  
    }
    useEffect(() => {
        setGoogleLogin(false);
        setFacebookLogin(false);
        setAppleLogin(false)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headText}>Welcome back</Text>
                <Text  style={[styles.headText,{color:'#505050', textAlign:'left', left:48, lineHeight:48}]}>to 
                <Text style={{color:'#3851DD', fontWeight:'700'}}> OneQuote</Text></Text>
            </View>
            <View animation="fadeInUpBig" style={[styles.footer]}>
                <Text style={styles.text_footer}>Email </Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter Your Email"
                        placeholderTextColor="rgba(171, 179, 187, 1)"

                        style={[styles.textInput, { lineHeight: 50}]}
                        autoCapitalize="none"
                        onChangeText={(val) => { }}
                        onEndEditing={(e) => { }}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                        : null}
                </View>
                {/* Space for Password Input Field Ui */}
                <View style={[styles.button, { marginTop: 30 }]}>
                    <TouchableOpacity
                        style={[styles.signIn, { backgroundColor: 'rgba(255, 207, 87, 1)', }]}
                        onPress={() => { }}
                    >
                        <View style={styles.signIn}>
                            <Text style={[styles.textSign, {fontSize:18, color: 'rgba(84, 72, 12, 1)' }]}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ORFlex}>
                    <View style={styles.ORBorder}></View>
                    <Text style={{ color: 'rgba(171, 179, 187, 1)' }}> OR </Text>
                    <View style={styles.ORBorder}></View>
                </View>
                <View style={[styles.button, { marginTop: 10 }]}>
                    {/* Google login */}
                    {!googleLogin && (
                        <TouchableOpacity onPress={handleGoogleLogin} style={[styles.signWith,{backgroundColor:'rgba(241, 67, 54, 1)'}]}>
                            <View style={styles.IconTitle}>
                                <Fontisto name="google" color="#fff" size={21} />
                                <Text google={true} style={[styles.textSign, { marginLeft: 8, lineHeight: 20, color: '#fff' }]}>Continue with Google {''}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {googleLogin && (
                        <TouchableOpacity google={true} disabled={true} style={[styles.signWith,{backgroundColor:'rgba(241, 67, 54, 1)'}]} >
                            <View style={styles.IconTitle} google={true} disabled={true}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={[styles.textSign, { marginLeft: 5, lineHeight: 21, color: '#fff' }]}>Continue with Google {''}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {/* Facebook */}
                    {!facebookLogin && (
                        <TouchableOpacity onPress={handlefacebookLogIn} style={[styles.signWith,{backgroundColor:'rgba(9, 90, 178, 1)'}]}>
                            <Text>{'    '}</Text>
                            <View style={styles.IconTitle}>
                                <MaterialCommunityIcons name="facebook" color="#fff" size={30} />
                                <Text style={[styles.textSign, { marginLeft: 5, lineHeight: 30, color: '#fff' }]}>Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {facebookLogin && (
                        <TouchableOpacity facebook={true} disabled={true} style={styles.signWith}>
                            <View style={styles.IconTitle} facebook={true} disabled={true}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={[styles.textSign, { marginLeft: 5, lineHeight: 30, color: '#fff' }]}>Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    {/* Apple Login */}
                    {!appleLogin && (
                        <TouchableOpacity onPress={handleAppleLogIn} style={[styles.signWith,{backgroundColor:'rgba(0, 0, 0, 1)'}]}>
                            <View style={styles.IconTitle}>
                                <Fontisto name="apple" color="#fff" size={25} />
                                <Text style={[styles.textSign, { marginLeft: 8, lineHeight: 22.5, color: '#fff' }]}>Continue with Apple {'   '}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {appleLogin && (
                        <TouchableOpacity apple={true} disabled={true}  style={[styles.signWith,{backgroundColor:'rgba(0, 0, 0, 1)'}]}>
                            <View style={styles.IconTitle} apple={true} disabled={true}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={[styles.textSign, { marginLeft: 8, lineHeight: 22.5, color: '#fff' }]}>Continue with Apple {'   '}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    {/* No account */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signUp,{marginTop:50}]}
                    >
                        <Text style={{ fontSize: 14 }}>Have an issue ? </Text>
                        <Text style={[styles.textSign, {
                            color: 'rgba(241, 67, 54, 1)', fontSize: 15
                        }]}>Contact us </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    header:{
        marginTop:25,
    },
    headText:{
        fontFamily:'Roboto',
        textAlign:'center',
        fontSize:47, 
        fontWeight:'normal', 
        color:'#505050',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 35,
        paddingVertical: 50,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 14,
        paddingHorizontal:5
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        // borderColor: '#f2f2f2',
        borderRadius:8,
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
        fontSize:14
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
        borderRadius: 8, 
    },
    signWith: {
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width: '100%',
        height: 45,
        borderRadius: 8,  
        // borderColor: '#009387',
        // borderWidth: 1,
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
        fontSize: 16,
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
