import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, 
    StatusBar, ScrollView, TouchableOpacity, Dimensions,
    Picker,TextInput,Switch
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { unmountComponentAtNode } from 'react-dom';

const NewClient = () => {
    const [selectedValue, setSelectedValue] = useState("Lead");
    const [company, setCompany] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [additional, setAdditional] = useState('');
    const [ucinfo] = useState([
        { key: 'company', title: 'ADD COMPANY NAME' },
        { key: 'contact', title: 'ADD CONTACT NUMBER' },
        { key: 'email', title: 'ADD EMAIL ADDRESS' },
        { key: 'additonal', title: 'ADD ADDITIONAL INFORMATION' },
    ])
    const [isEnabled, setIsEnabled] = useState(false);
    const [contactArray, setContactArray] = useState([]);
    const [emailArray, setEmailArray] = useState([]);
    const [index, setIndex] = useState(0);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    const screenWidth  = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const fixWidth = (screenWidth*94.71/100);
    const dBlue ='rgba(5, 30, 117, 1)';
    const dGreen= "rgba(16, 176, 176, 1)";
    const bColor = "rgba(128,128,128, 0.5)";
    const iconColor='rgba(151, 151, 151, 1)';
    // console.log(fixWidth);

    const ContactButton = () =>{
        return(
            <View style={[NewStyles.BtnContainer, {marginTop:10,paddingLeft:5}]}>
                <MaterialCommunityIcons name="phone-in-talk-outline" size={30} color={iconColor} style={{lineHeight:50}} />
                <View style={NewStyles.BtnBox}>
                    <TouchableOpacity 
                        onPress={() => showContactInput(ucinfo[1].key)}
                    >
                        <Text style={[NewStyles.BtnTxt,{color:dGreen}]}>{ucinfo[1].title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const EmailButton = () =>{
        return(
            <View style={[NewStyles.BtnContainer, {marginTop:10,paddingLeft:5}]}>
                <MaterialCommunityIcons name="email-outline" size={30} color={iconColor} style={{lineHeight:50}} />
                <View style={NewStyles.BtnBox}>
                    <TouchableOpacity 
                        onPress={() => showEmailInput(ucinfo[2].key)}
                    >
                        <Text style={[NewStyles.BtnTxt,{color:dGreen}]}>{ucinfo[2].title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const CompanyView = () => {
        return (
            <View style={[NewStyles.BtnContainer, {marginTop:20, paddingLeft:5}]}>
                <MaterialCommunityIcons name="office-building" size={30} color={iconColor} style={{lineHeight:50}} />
                <View style={[NewStyles.inputBox]}>
                    <TextInput
                        style={{ paddingTop: 1, marginBottom: 1 }}
                        name="company"
                        type="string"
                        placeholder="Company Name"
                        placeholderTextColor={dGreen}
                    />
                    <View style={[NewStyles.inputBorder, { borderColor: dBlue }]}></View>
                </View>
            </View>
        )
    }
    const ContactView = () =>{
        return(
            <View style={NewStyles.outerBox}>
                <View style={NewStyles.innerBox}>
                    <MaterialCommunityIcons name="phone-in-talk-outline" size={30} color={iconColor} style={{lineHeight:30}} />
                    <View style={[NewStyles.inputBox]}>
                            <TextInput 
                                style={{paddingTop:1, marginBottom:1}}
                                name="contact"
                                type="string"
                                placeholder="Contact Number"
                                placeholderTextColor={dGreen}
                            />
                            <View style={[NewStyles.inputBorder,{borderColor:dBlue}]}></View>
                       
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}}>
                    <View style={{marginLeft:42}}>
                        <Text>{' '}</Text>
                        <Text style={[NewStyles.mTxt,{lineHeight:20}]}>Receives text messages</Text>
                    </View>
                        <Switch
                            style={{marginTop:15,marginRight:15}}
                            trackColor={{ false: "gray", true:"rgba(16, 176, 176, 0.6)" }}
                            thumbColor={isEnabled ? "rgba(16, 176, 176, 1)" : "rgba(16, 176, 176, 1)"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                </View>
                <View  style={{marginLeft:42, marginTop:10}}>
                     <Text style={{color:'rgba(0, 0, 0, 0.6)'}}>Label</Text>
                </View>
                <View style={{width:350,coloe:'red',marginLeft:35,paddingRight:20, marginTop:10}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{height: 50,fontSize:18,paddingRight:10,}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Main" value="Main" />
                        <Picker.Item label="Work" value="Work" />
                        <Picker.Item label="Mobile" value="Mobile" />
                        <Picker.Item label="Home" value="Home" />
                        <Picker.Item label="Fax" value="Fax" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <View style={NewStyles.BottomBorder}></View>
                </View>
            </View>
        )
    }
    const EmailView = () =>{
        return(
            <View style={NewStyles.outerBox} >
                <View style={NewStyles.innerBox}>
                    <MaterialCommunityIcons name="email-outline" size={30} color={iconColor} style={{lineHeight:30}} />
                    <View style={[NewStyles.inputBox]}>
                        <TextInput 
                            style={{paddingTop:1, marginBottom:1}}
                            name="Email"
                            type="string"
                            placeholder="Email Address"
                            placeholderTextColor={dGreen}
                        />
                        <View style={[NewStyles.inputBorder,{borderColor:dBlue}]}></View>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}}>
                    <View style={{marginLeft:42}}>
                        <Text>{' '}</Text>
                        <Text style={[NewStyles.mTxt,{lineHeight:20}]}>Receives text messages</Text>
                    </View>
                        <Switch
                            style={{marginTop:15}}
                            trackColor={{ false: "gray", true:"rgba(16, 176, 176, 0.6)" }}
                            thumbColor={isEnabled ? "rgba(16, 176, 176, 1)" : "rgba(16, 176, 176, 1)"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                </View>
                <View  style={{marginLeft:42, marginTop:10}}>
                     <Text style={{color:'rgba(0, 0, 0, 0.6)'}}>Label</Text>
                </View>
                <View style={{width:350,coloe:'red',marginLeft:35,paddingRight:20, marginTop:10}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{height: 50,fontSize:18,paddingRight:10, }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Main" value="Main" />
                        <Picker.Item label="Work" value="Work" />
                        <Picker.Item label="Personal" value="Personal" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <View style={NewStyles.BorderBottom}></View>
                </View>
            </View>
        )
    }

    const AdditionalView = () =>{
        return(
            <View style={[NewStyles.inputBox]}>
                <TextInput 
                    style={{paddingTop:1, marginBottom:1}}
                    name="Additional"
                    type="string"
                    placeholder="Additional Information"
                    placeholderTextColor={dGreen}
                />
                <View style={[NewStyles.inputBorder,{borderColor:dBlue}]}></View>
            </View>
        )
    }
    const showCompanyInput = (text) =>{
        if(ucinfo[0].key===text){
            setCompany(text);
        }      
    }

    const showContactInput = (text) =>{
        if(ucinfo[1].key===text){
            setContact(text);
        }  
    }

    const showEmailInput = (text) =>{
        if(ucinfo[2].key===text){
            setEmail(text);
        }  
    }
    const showAdditionalInput = (text) =>{
        if(ucinfo[3].key===text){
            setAdditional(text);
        } 
    }

    const addMoreContact = () => {
        contactArray.push({
            key: index,
            id: index,
        });
        setContactArray(contactArray)
        setIndex(index + 1);
    }
    const addMoreEmail = () => {
        emailArray.push({
            key: index,
            id: index,
        });
        setEmailArray(emailArray)
        setIndex(index + 1);
    }

    let ContactArrayList = contactArray.map((room, i) => {
        return (
            <ContactView key={i} id={i}/>
        )
    })

    let EmailArrayList = emailArray.map((room, i) => {
        return (
            <EmailView key={i} id={i}/>
        )
    })

    useEffect(() => {
        setCompany('');
        setContact('');
        setEmail('');
        setAdditional('');
        setContactArray([]);
        setEmailArray([])
    }, [])
    return (
        <SafeAreaView style={NewStyles.safeArea}>
            <StatusBar backgroundColor="rgba(83, 83, 83, 0.58)"  style="light"  />
            <ScrollView horizontal={false} style={{flex:1}}>
               <View style={NewStyles.uploadBox}>
                    <TouchableOpacity  
                        onPress={() => console.log('add prop')}
                        style={NewStyles.uploadBtn}>
                        <Text style={NewStyles.Txt}>
                            UPLOAD FROM CONTACTS
                        </Text>
                    </TouchableOpacity>
               </View>
               <View style={NewStyles.common}>
                   <View style={[NewStyles.fieldBox,{ width:fixWidth}]}>
                        <Text style={{fontSize:10}}>Account Status</Text>
                        <View style={NewStyles.container}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{height: 50, width: 350, fontSize:18 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Lead" value="Lead" />
                                <Picker.Item label="Custom" value="Custom" />
                            </Picker>
                        </View>
                   </View>
               </View>
               <View style={NewStyles.common}>
                   <View style={[NewStyles.fieldBox,{ width:fixWidth}]}>
                        <Text style={{fontSize:10}}>Account Type</Text>
                        <View style={NewStyles.container}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{height: 50, width: 350, fontSize:18 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Individual" value="Individual" />
                                <Picker.Item label="Business" value="Business" />
                            </Picker>
                        </View>
                   </View>
               </View>
               <View style={NewStyles.common}>
                   <View style={[NewStyles.fieldBox,{ width:fixWidth}]}>
                        <Text style={{fontSize:10}}>Assigned To</Text>
                        <View style={NewStyles.container}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{height: 50, width: 350, fontSize:18 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Jack Black" value="Jack Black" />
                                <Picker.Item label="Daniel Green" value="Daniel Green" />
                            </Picker>
                        </View>
                   </View>
               </View>
               <View>
                    <View style={[NewStyles.titleBox,{borderColor:bColor}]}>
                        <Text style={[NewStyles.titleTxt,{color:dBlue}]}>Contact Information</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center',marginTop:15}}>
                        <View style={{flex:1, flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
                            <View style={{marginRigt:2}}><EvilIcons name="user" size={40} color={iconColor} style={{lineHeight:50}} /></View>
                            <View style={{flex:1, height:40, borderWidth:1, borderColor:'lightgray', margin:5}}>
                                <Text style={{fontSize:10, marginLeft:3, color:'rgba(193, 193, 193, 0.92)'}}>First Name</Text>
                                <TextInput 
                                    style={{marginLeft:3,}}
                                    name="fname"
                                    type="string"
                                    placeholder="Jordan"
                                    placeholderTextColor="black"
                                />
                            </View>
                            <View style={{flex:1, height:40, borderWidth:1, borderColor:'lightgray',margin:5}}>
                                <Text style={{fontSize:10, marginLeft:3, color:'rgba(193, 193, 193, 0.92)'}}>Last Name</Text>
                                <TextInput 
                                    style={{marginLeft:3,}}
                                    name="fname"
                                    type="string"
                                    placeholder="Lachance"
                                    placeholderTextColor="black"
                                />
                            </View>
                        </View>
                        {company ==="" || ucinfo[0].key !== company ? 
                        <View style={[NewStyles.BtnContainer, {marginTop:20, paddingLeft:5}]}>
                            <MaterialCommunityIcons name="office-building" size={30} color={iconColor} style={{lineHeight:50}} />
                            <View style={NewStyles.BtnBox}>
                                <TouchableOpacity 
                                    onPress={() => showCompanyInput(ucinfo[0].key)}
                                >
                                    <Text style={[NewStyles.BtnTxt,{color:dGreen}]}>{ucinfo[0].title}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                         <CompanyView />
                        }
                        {contact ==="" ||  ucinfo[1].key !== contact ?
                            <ContactButton  />
                        :
                            <View style={{flex:1, alignItems:'center',justifyContent:'center', width:'100%'}}>
                                <ContactView  />
                                { ContactArrayList }
                            </View>
                        }
                        {contact ==="" ||  ucinfo[1].key !== contact ? 
                            null
                        :
                            <View style={{flex:1, alignItems:'center', marginTop:10}}>
                                <TouchableOpacity onPress={() => addMoreContact()}
                                style={{backgroundColor:'#fff',borderRadius:2, padding:10, elevation:3}}>
                                    <Text style={{fontSize:18}}>Add Another Contact</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        { email === "" || ucinfo[2].key !== email ?
                            <EmailButton />
                        :
                            <View style={{flex:1, alignItems:'center',justifyContent:'center', width:'100%'}}>
                                <EmailView  />
                                { EmailArrayList }
                            </View>
                        }
                        { email === "" || ucinfo[2].key !== email ? 
                            null
                        :
                            <View style={{flex:1, alignItems:'center', marginTop:10}}>
                                <TouchableOpacity 
                                    onPress={() => addMoreEmail()}
                                    style={{backgroundColor:'#fff',borderRadius:2, padding:10, elevation:3}}>
                                    <Text style={{fontSize:18}}>Add Another Email</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={[NewStyles.BtnContainer, {marginTop:10,paddingLeft:5}]}>
                            <MaterialCommunityIcons name="format-align-left" size={30} color={iconColor} style={{lineHeight:50}} />
                            { additional ==="" || ucinfo[3].key !== additional ?
                                <View style={NewStyles.BtnBox}>
                                    <TouchableOpacity 
                                        onPress={() => showAdditionalInput(ucinfo[3].key)}
                                    >
                                        <Text style={[NewStyles.BtnTxt,{color:dGreen}]}>{ucinfo[3].title}</Text>
                                    </TouchableOpacity>
                                </View>
                            :
                              <AdditionalView  />
                            }
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center',padding:20}}>
                        <TouchableOpacity  
                            onPress={() => console.log('add prop')}
                            style={{backgroundColor:dBlue, width:326, height:33,borderRadius:2, elevation:3}}>
                            <Text style={{fontSize:22, color:'#fff', textAlign:'center', lineHeight:30}}>
                                ADD ANOTHER CONTACT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={[NewStyles.titleBox,{borderColor:bColor}]}>
                        <Text style={[NewStyles.titleTxt,{color:dBlue}]}>Property Details</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <View style={NewStyles.details}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <EvilIcons name="location" size={31} color={iconColor} style={{lineHeight:40, marginRight:2}} />
                                <Text style={NewStyles.pTxt}>Property Address</Text>
                            </View>
                            <View style={{position:'absolute', top:2, right:10,}}>
                                <Switch
                                    trackColor={{ false: "gray", true:"rgba(16, 176, 176, 0.6)" }}
                                    thumbColor={isEnabled ? "rgba(16, 176, 176, 1)" : "rgba(16, 176, 176, 1)"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                        <View style={[NewStyles.BODR,{borderColor:dBlue, position:'relative', top:-10}]}></View>
                    </View>
                    <View style={{marginTop:20}}>
                        <View style={NewStyles.details}>
                            <View style={{marginLeft:35}}>
                                <TextInput
                                    style={{fontSize:18,fontWeight:'bold',lineHeight:32,}}
                                    name="address2"
                                    type="string"
                                    placeholder="Address Line 2 "
                                    placeholderTextColor="rgba(0, 0, 0, 0.6)"
                                />
                            </View>
                        </View>
                        <View style={[NewStyles.BODR,{borderColor:dBlue,}]}></View>
                    </View>
                    <View style={{marginTop:20}}>
                        <View style={{flex:1, alignItems:'center'}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                               <TouchableOpacity  style={[NewStyles.addTab,{color:dBlue}]}>
                                   <Text style={[NewStyles.addTabTxt,{color:dBlue}]}>CITY</Text>
                               </TouchableOpacity>
                               <TouchableOpacity  style={[NewStyles.addTab,{color:dBlue}]}>
                                   <Text style={[NewStyles.addTabTxt,{color:dBlue}]}>PROVINCES</Text>
                               </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:1, alignItems:'center'}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                               <TouchableOpacity  style={[NewStyles.addTab,{color:dBlue}]}>
                                   <Text style={[NewStyles.addTabTxt,{color:dBlue}]}>POSTAL CODE</Text>
                               </TouchableOpacity>
                               <TouchableOpacity  style={[NewStyles.lastAddTab,{color:dBlue}]}>
                                   <Text style={[NewStyles.addTabTxt,{color:dBlue}]}>
                                       COUNTRY 
                                    </Text>
                                    <AntDesign name="caretdown"  size={18} style={{lineHeight:33, marginRight:10}} />
                               </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:20}}>
                        <View style={NewStyles.details}>
                            <View style={{marginLeft:12}}>
                                <Text style={[NewStyles.pTxt,{lineHeight:25}]}>Billing address matches property</Text>
                            </View>
                            <View style={{position:'absolute', top:2, right:10,}}>
                                <Switch
                                    trackColor={{ false: "gray", true:"rgba(16, 176, 176, 0.6)" }}
                                    thumbColor={isEnabled ? "rgba(16, 176, 176, 1)" : "rgba(16, 176, 176, 1)"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center',padding:20}}>
                        <TouchableOpacity  
                            onPress={() => console.log('add prop')}
                            style={{backgroundColor:dBlue, width:326, height:33, borderRadius:2, elevation:3}}>
                            <Text style={{fontSize:22, color:'#fff', textAlign:'center', lineHeight:30}}>
                                ADD ANOTHER CONTACT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[NewStyles.BtnContainer, {marginTop:10, marginBottom:50}]}></View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default NewClient

const NewStyles = StyleSheet.create({
    safeArea:{
        flex:1,
        // alignItems:'center', 
        backgroundColor: '#fff'
    },
    uploadBox:{
        flex:1,
        alignItems:'center',
        marginTop:18, 
        overflow: 'hidden', 
        paddingBottom: 5 
    },
    uploadBtn:{
        backgroundColor:"#fff", 
        width:326, 
        height:33, 
        borderWidth:1, 
        borderRadius:2, 
        borderColor:'rgba(222, 222, 222, 0.91)',
        elevation:3,
    },
    Txt:{
        fontSize:18, 
        color:'rgba(16, 176, 176, 1)', 
        fontWeight:'bold',
        textAlign:'center', 
        lineHeight:35
    },
    common:{
        flex:1,
        alignItems:'center',
        margin:5
    },
    fieldBox:{
        flex:1,
        marginTop:16,
        height:44.33, 
        borderWidth:0,
        borderBottomWidth:1,
        borderColor:'rgba(5, 30, 117, 1)',
    },
    outerBox:{
        flex:1, 
        width:'100%', 
        marginTop:10, 
        // borderWidth:2,
        // borderColor:"rgba(128,128,128, 0.3)",
        shadowOffset: {
            width: 10,
            height: 10,
          },
        shadowColor:'#fff',
        backgroundColor:'#fff',
        elevation:5
    },
    innerBox:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10,
        paddingLeft:5
    },
    container:{
        flex: 1,
        // paddingTop:10,
        flexDirection:'row',
        alignItems: "center"
    },
    titleBox:{
        width:'100%',
        height:30, 
        overflow:'hidden',
        // paddingBottom:5,
        borderWidth:1, 
        // borderTopWidth:0,  
        backgroundColor:'rgba(229, 229, 229, 1)',
        marginTop:15,
        // elevation:-10
    },
    titleTxt:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:25, 
        marginLeft:10
    },
    BtnContainer:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        backgroundColor:'#fff',
        marginTop:5
    },
    BtnBox:{
        flex:1, 
        height:40, 
        borderWidth:1, 
        borderColor:'lightgray', 
        margin:5,
        backgroundColor:'#fff',
        elevation:3  
    },
    inputBox:{
        flex:1, 
        // height:40, 
        // borderWidth:1, 
        // borderBottomWidth:1,
        // borderColor:'black', 
        margin:5,
        backgroundColor:'#fff',
    },
    inputBorder:{
        // width:'100%',
        borderBottomWidth:1, 
    },
    BtnTxt:{
        padding:5,
        fontSize:18, 
        fontWeight:'bold',
        lineHeight:27
    },
    BODR:{
        borderBottomWidth:1, 
        marginLeft:30, 
        marginRight:18,
    },
    details:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        marginLeft:2, 
        marginRight:3
    },
    msg:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        marginLeft:2, 
    },
    mTxt:{
        fontSize:14,
        lineHeight:32,
        textAlign:'left',
        color:'rgba(0, 0, 0, 0.6)'
    },
    pTxt:{
        fontSize:18,
        fontWeight:'bold',
        lineHeight:32,
        textAlign:'left',
        color:'rgba(0, 0, 0, 0.6)'
    },
    addTab:{
        width:160, 
        height:33, 
        backgroundColor:"rgba(202, 207, 226, 1)",
        borderRadius:2, 
        elevation:2,
        margin:5,
    },
    lastAddTab:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:160, 
        height:33, 
        backgroundColor:"rgba(202, 207, 226, 1)",
        borderRadius:2, 
        elevation:2,
        margin:5,
    },
    addTabTxt:{
        fontSize:18, 
        fontWeight:'bold',
        marginLeft:10, 
        lineHeight:33, 
    },
    BottomBorder:{
        flex:1,
        width:303,
        marginLeft:7,
        marginBottom:10,
        borderBottomWidth:1, 
        borderColor:'black' 
    }

})
