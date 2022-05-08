import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet ,StatusBar,Alert} from 'react-native';
// import { StatusBar } from "expo-status-bar";
import * as Animatable from 'react-native-animatable';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';


const SignUpScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='rgba(16, 176, 176, 1)' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>VERYGOOD </Text>
            <Text style={{color:'#fff', textAlign:'center'}}>Sign Up</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {backgroundColor: colors.background}]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Email </Text>
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
                    onChangeText={() => console.log('onChange')}
                    onEndEditing={()=> console.log('onEditing')}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }

            <Text style={[styles.text_footer, {color: colors.text,marginTop: 15}]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    style={{lineHeight:30}}
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    // secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                    onChangeText={() => console.log("Value")}
                />
                <TouchableOpacity onPress={() => console.log('clicked')}>
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
            <Text style={[styles.text_footer, {color: colors.text,marginTop: 15}]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    style={{lineHeight:30}}
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Re-enter Password"
                    placeholderTextColor="#666666"
                    // secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                    onChangeText={() => console.log("Value")}
                />
                <TouchableOpacity onPress={() => console.log('clicked')}>
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
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.signIn,{backgroundColor: 'rgba(16, 176, 176, 1)',}]}
                    onPress={() => {console.log("Login")}}
                >
                <View
                    // colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {color:'#fff'}]}>Sign Up</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={styles.signUp}
                >    
                    <Text style={{ fontSize: 14}}>Already have an account ? </Text>
                    <Text style={[styles.textSign, {
                        color: '#009387', fontSize:15
                    }]}>Sign In !</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    )
}

export default SignUpScreen;

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
        marginTop:10,
        paddingHorizontal: 100,
        paddingBottom: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10
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
    signUp: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        marginTop: 15
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})

