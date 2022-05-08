import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {useTheme,Avatar,Title,Caption,Drawer,Paragraph,Text} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from '../FrontScreen/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DrawerContent = (props,{navigation, route}) => {
    const [data, setData] = useState({
        useremail:'',
        name: '',
        uid: '',
        userimage: ''
    });
    const [isImageLoading, setImageLoadStatus] = useState(false);
    const {userData, setUserData} = useContext(UserContext)

    const getStorageData = async () =>{
      try {
          const email = await AsyncStorage.getItem('useremail');
          const fname = await AsyncStorage.getItem('fname');
          const userimg = await AsyncStorage.getItem('userImage');
          // console.log(fname);
              setData({
                  ...data,
                  useremail:email,
                  name: fname,
                  userimage: userimg    
              })
      } catch (error) {
         console.log(error)
      }
  }
  
    const handleLogOut = () =>{
        setUserData(null);
        // setTimeout(() => {
        //     props.navigation.navigate('SplashScreen')
        // }, 1000)     
        setImageLoadStatus(false);
    }
    // useEffect(() => {
    //   getStorageData();
    // }, []);
    return(
            <View style={{flex:1}}>
               <DrawerContentScrollView {...props}>
                 <View style={styles.drawerContent}>
                    <View style={styles.userInfoPanel}>
                      <View style={{flexDirection:'row', marginTop:5}} >
                        {userData.photoUrl !== "" ?
                          <Avatar.Image  style={{backgroundColor:'#fff'}} source={{uri:userData.photoUrl}} size={50} onLoadEnd={() => setImageLoadStatus(true)} /> 
                        :
                          <Avatar.Image  style={{backgroundColor:'#fff'}} source={require('../assets/logos/logo.png')} size={50} size={50} />
                        }
                        <View style={{marginLeft:15,flexDirection:'column'}}>
                            <Title style={styles.title}>{ userData.name }</Title>
                            <Caption style={styles.caption}>@{userData.name}</Caption>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                               <Text>$</Text>2,500
                            </Paragraph>
                            <Caption style={styles.caption}>Closed</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                               <Text>$</Text>10,000
                            </Paragraph>
                            <Caption style={styles.caption}>Potential</Caption>
                        </View>
                      </View>
                    </View>
                    <Drawer.Section style={styles.bottomSection}>
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                              <Icon name="home-outline"  color={color}  size={size}/>
                            )}
                          label="Home"
                          onPress={() => {props.navigation.navigate('HomePage')}}
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                                <Icon name="office-building"  color={color}  size={size}/>
                            )}
                            label="Company"
                            onPress={() => {props.navigation.navigate('Company')}}   
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                              <Icon name="file-document-outline"  color={color}  size={size}/>
                            )}
                            label="Documents"
                            onPress={() => {props.navigation.navigate('Documents')}}
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                              <Icon name="clock-time-three-outline"color={color}size={size}/>
                            )}
                            label="Schedule"
                            onPress={() => {props.navigation.navigate('Schedule')}}
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                              // <Icon name="upgrade"color={color}size={size}/>
                              <MaterialIcons name="upgrade" size={size} color={color} />
                            )}
                            label="Upgrade"
                            // onPress={() => {props.navigation.navigate('Upgrade')}}
                        />
                        <DrawerItem style={[styles.items,styles.d]}
                            icon={({color,size}) => (
                              <MyIcon name="dollar" style={styles.dollar} color={color} size={20}/>
                            )}
                            label="Rates"
                            onPress={() => {props.navigation.navigate('Rates')}}
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                                <MaterialIcons name="category"  color={color}  size={22}/>
                            )} 
                            label="Items"
                            onPress={() => {props.navigation.navigate('Items')}}
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                                <MyIcon name="money"  color={color}  size={20}/>
                            )}
                          label="Tax"
                          // onPress={() => {props.navigation.navigate('Tax')}}
                        />
                       {/*  <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                                <MyIcon name="edit"  color={color}  size={20}/>
                            )}
                            label="Customize(Sms,Email,Notes,Paymnets)"
                            onPress={() => {props.navigation.navigate('Contact')}}
                        /> */}
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                                <MaterialIcons name="contact-phone"  color={color}  size={20}/>
                            )}
                            label="Contact us"
                            onPress={() => {props.navigation.navigate('Contact')}}
                        />
                        <DrawerItem style={styles.items}
                            icon={({color,size}) => (
                                  <Icon name="help-rhombus-outline"  color={color}  size={size}/>
                            )}
                            label="Help"
                            // onPress={() => {props.navigation.navigate('Contact')}}
                        />
                        <DrawerItem style={[styles.items, styles.itemP]}
                            icon={({color,size}) => (
                              <MyIcon name="users"  color={color}  size={20}/>
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section >
                      <Text style={{textAlign:'center', lineHeight:20, marginBottom:10}}>{userData.email}</Text>
                    </Drawer.Section>
                    {/* <Drawer.Section style={styles.bottomDrawerSection}> */}
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {handleLogOut()}}
                />
            {/* </Drawer.Section> */}
                 </View>
               </DrawerContentScrollView>
               
            </View>
    );
};

export {DrawerContent};
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    //   flexDirection:'row',
      // backgroundColor:'#42DD87',
      // borderBottomWidth:2,
      // borderBottomColor: '#bdc3c7',
      marginTop:-5,
      // paddingBottom:10
     
    },
    userInfoPanel: {
      paddingLeft: 20,
      backgroundColor:'#fff',
      shadowColor: 'black',
      // borderBottomWidth:2,
      // borderBottomColor: '#bdc3c7',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 0.5
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      marginTop: -6
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 5
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    items:{
       marginBottom: -15
    },
    itemP:{
        paddingBottom:10   
    },
    dollar:{
        marginLeft: 6,
        paddingRight: 6
    },
    d:{
      marginLeft: 10,
      
    },
    bottomSection: {
        marginBottom: 15,
        // paddingBottom: 10
        // borderTopColor: '#fff',
        // borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginTop: -10
    },

});