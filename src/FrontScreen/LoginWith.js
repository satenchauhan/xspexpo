import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Image,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
// import { StatusBar } from "expo-status-bar";
import * as Animatable from 'react-native-animatable';
import { SocialIcon } from 'react-native-elements'
import { useTheme } from '@react-navigation/native';


const LoginWith = ({navigation}) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='rgba(16, 176, 176, 1)' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>VERYGOOD </Text>
            <Text style={{color:'#fff', textAlign:'center'}}>Login</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <View style={styles.button}>   
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >    
                    <View><Image
                        style={{
                            height: 30,
                            width: 30,
                            resizeMode: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',  
                            marginRight:10,
                            marginTop:2
                        }} 
                        source={require('../assets/gg.png')}/>
                    </View>
                    <Text style={[styles.textSign, {color: '#db3236'}]}>Login with Google </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >    
                    <View><Image 
                       style={{
                            height: 50,
                            width: 40,
                            resizeMode: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',  
                            marginRight:10,
                        }} 
                       source={require('../assets/fb.png')}/>
                    </View>
                    <Text style={[styles.textSign,{color:'#3b5998'}]}>Login with Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('facebook')}
                    style={[styles.signIn, {
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >    
                    <View><Image 
                        style={{
                            height: 50,
                            width: 40,
                            resizeMode: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',  
                            marginRight:10,
                        }}  
                        source={require('../assets/apple.png')}/>
                    </View>
                    <Text style={[styles.textSign,{color:'black'}]}>Login with Apple </Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    )
}

export default LoginWith

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignSelf:'center',
        // justifyContent:'center',
        backgroundColor: 'rgba(16, 176, 176, 1)',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
        padding: 10
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    chart: {
        height: 20,
        width: 20,
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'center',  
        marginRight:10,
    },
})


{/* <SocialIcon
        style={[styles.signIn, {
        flexDirection:'row',
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15,
        backgroundColor:'#fff',
        color:'black'
    }]}
    title='Login with Google'
    button
    color="black"
    type='google'
    fontStyle={{color:'black', fontSize:22}}
    iconColor="#db3236"
    underlayColor="black"
/> */}
