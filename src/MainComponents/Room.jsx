import React, { useState, useEffect, useRef } from 'react'
import {RefreshControl,Text, View,StyleSheet, TextInput, ScrollView,
     TouchableOpacity,Animated, 
     LayoutAnimation, Dimensions, UIManager
    } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RoomStyles } from '../assets/css/RoomStyle';
import CabinetFrame from '../ItemsComponents/CabinateFrame';
import CeilingFrame from '../ItemsComponents/CeilingFrame';
import ClosetFrame from '../ItemsComponents/ClosetFrame';
import CustomFrame from '../ItemsComponents/CustomFrame';
import DoorFrame from '../ItemsComponents/DoorFrame';
import PrepWorkFrame from '../ItemsComponents/PrepWorkFrame';
import StairFrame from '../ItemsComponents/StairsFrame';
import TrimFrame from '../ItemsComponents/TrimFrame';
import WallFrame from '../ItemsComponents/WallFrame';
import WallpaperFrame from '../ItemsComponents/WallpaperFrame';
import WindowFrame from '../ItemsComponents/WindowFrame';
import RoomMenuPopUp from './RoomMenuPopUp';
import AddImageSection from './AddImageSection';
import AddNoteSection from './AddNoteSection';
import RoomEstimator from './RoomEstimator';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ItemModel from './ItemModel';
import PriceSection from './PriceSection';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Room = (props) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [newName, setNewName] = useState(props.roomName);
    const [inputTxt, setInputTxt] = useState("");
    const [shouldHide, setShouldHide] = useState(true);
    const [headerStyle, setHeaderStyle] = useState({...headerStyle});
    const [showHide, setShowHide] = useState(false);
   
    // Items
    const [stairName , setStairName] = useState('')
    const [customItemName , setCustomItemName] = useState('')
    const [wallpaperName , setWallpaperName] = useState('')
    const [cabinetName , setCabinetName] = useState('')
    const [wallName , setWallName] = useState('')
    const [ceilingName , setCeilingName] = useState('')
    const [doorName , setDoorName] = useState('')
    const [trimName , setTrimName] = useState('')
    const [prepWorkName , setPrepWorkName] = useState('')
    const [closetName , setClosetName] = useState('')
    const [windowName , setWindowName] = useState('')
    const [stairArray, setStairArray]= useState([]);
    const [wallpaperArray, setWallpaperArray]= useState([]);
    const [customArray, setCustomArray]= useState([]);
    const [cabinetArray, setCabinetArray]= useState([]);
    const [wallArray, setWallArray]= useState([]);
    const [windowArray, setWindowArray]= useState([]);
    const [closetArray, setClosetArray]= useState([]);
    const [doorArray, setDoorArray]= useState([]);
    const [ceilingArray, setCeilingArray]= useState([]);
    const [trimArray, setTrimArray]= useState([]);
    const [prepWorkArray, setPrepWorkArray]= useState([]);

    const [textLayoutHeight,setTextLayoutHeight] = useState(0);
    const [updatedHeight,setUpdatedHeight] = useState(0);
    const [expand,setExpand] = useState(false);
    const [txtColor, setTxtColor] = useState('black');

    const [showHeight, setShowHeight] = useState(false);
    const [fixHeight, setFixHeight] = useState(0)

    const [showModal, setShowModal] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [showPen, setShowPen] = useState(false);
    const [showFooter, setShowFooter] = useState(true);

    const [slideUp, setSlideUp] = useState(true);
    const [textChange, setTextChange] = useState('Hide');

    const scrollView = useRef(10);
 
    if( Platform.OS === 'android' ){
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const expand_collapse_Function =()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut );
        if(expand === false){
            setUpdatedHeight(textLayoutHeight);
            setExpand(true);
            // setSlide(true);
        }else{
            setUpdatedHeight(0);
            setExpand(false);
            // setSlide(false);
        }
    }

    const getHeight = (height) =>{
        setTextLayoutHeight(height);
    }

    const onLayout=(event)=> {
        const {height, width} = event.nativeEvent.layout;
        // console.log(height);
    }
    const ItemWidth = '200';
    const ItemHeight = '400';

    const PopUpWidth = '160';
    const PopUpHeight = '200';
    const MenuAnim1 = useRef(new Animated.Value(0)).current;
    const MenuAnim2 = useRef(new Animated.Value(0)).current;
    const todoInput = useRef();

    const ItemAnim1 = useRef(new Animated.Value(0)).current;
    const ItemAnim2 = useRef(new Animated.Value(0)).current;

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const MenuAnimateExpan = () =>{                  
        Animated.timing(                  
            MenuAnim1,                        
            {
            toValue:PopUpHeight,              
            duration: 500,
            useNativeDriver: false          
            }
        ).start();     
        Animated.timing(                 
            MenuAnim2,           
            {
            toValue: PopUpWidth,                  
            duration: 500, 
            useNativeDriver: false             
            }
        ).start();                        
    }
    const MenuAnimateClose = () => {                        
        Animated.timing(                  
            MenuAnim1,                        
            {
            toValue:0,              
            duration: 500,
            useNativeDriver: false          
            }
        ).start();     
        Animated.timing(                 
            MenuAnim2,           
            {
            toValue:0,                  
            duration: 500, 
            useNativeDriver: false             
            }
        ).start();                        
    }

    useEffect(() => {
        Animated.timing(                  
            MenuAnim1,                        
            {
            toValue: 0,              
            duration: 100,
            useNativeDriver: false          
            }
        ).start();     
        Animated.timing(                 
            MenuAnim2,           
            {
            toValue: 0,                  
            duration: 100, 
            useNativeDriver: false             
            }
        ).start(); 
        setNewName(props.roomName);
        setTxtColor("black");
        setCustomArray([])
        setStairArray([]);
        setTrimArray([]);
        setWallArray([]);
        setWallpaperArray([]);
        setCabinetArray([]);
        setCeilingArray([]);
        setClosetArray([]);
        setDoorArray([]);
        setCeilingArray([]);
        setPrepWorkArray([]);
        setWindowArray([]);
        setShowPrice(false);
        setShowCamera(false);
        setShowPen(false);
        setShowFooter(true);
        setShowHide(false);
        setSlideUp(true);
        setTextChange('Hide')
    }, []);
    
    /* const show = () =>{
        setSlide(true);
    }

    const hide =() =>{
        setSlide(false);
    } */
    const addStair = (index, item) =>{
        let itemAdded = {index: index+1 };
        setStairArray(stairArray => [...stairArray, itemAdded])
        setStairName(item)
    }
    const addWallpaper = (index, item) =>{
        let itemAdded = {index: index+1 };
        setWallpaperArray(wallpaperArray => [...wallpaperArray, itemAdded])
        setWallpaperName(item)
    }
    const addCustom = (index, item) =>{
        let itemAdded = {index: index+1 };
        setCustomArray(customArray => [...customArray, itemAdded])
        setCustomItemName(item)
    }
    const addCabinet = (index, item) =>{
        let itemAdded = {index: index+1 };
        setCabinetArray(cabinetArray => [...cabinetArray, itemAdded])
        setCabinetName(item);
    }
    const addWindow = (index, item) =>{
        let itemAdded = {index: index+1 };
        setWindowArray(cabinetArray => [...cabinetArray, itemAdded])
        setWindowName(item);
    }
    const addDoor = (index, item) =>{
        let itemAdded = {index: index+1 };
        setDoorArray(doorArray =>[...doorArray, itemAdded]);
        setDoorName(item);
    }
    const addTrim = (index, item) =>{
        let itemAdded = {index: index+1 };
        setTrimArray(trimArray =>[...trimArray, itemAdded]);
        setTrimName(item);
    }
    const addCeiling = (index, item) =>{
        let itemAdded = {index: index+1 };
        setCeilingArray(ceillingArray =>[...ceillingArray, itemAdded]);
        setCeilingName(item);
    }
    const addCloset = (index, item) =>{
        let itemAdded = {index: index+1 };
        setClosetArray(closetArray => [...closetArray, itemAdded]);
        setClosetName(item)
    }
    const addPrepWork = (index, item) =>{
        let itemAdded = {index: index+1 };
        setPrepWorkArray(prepWorkArray =>[...prepWorkArray, itemAdded]);
        setPrepWorkName(item);
    }
    const addWall = (index, item) =>{
        let itemAdded = {index: index+1 };
        setWallArray(wallArray => [...wallArray, itemAdded]);
        setWallName(item);
    }

    const deleteItem = (del_id) =>{
        // console.log(" del id "+del_id)
        if (prepWorkArray.length) {
            setPrepWorkArray((prepWorkArray) => {
                return prepWorkArray.filter((item,i) => {
                    return i !== del_id;
                });
            });
        }
        if (customArray.length) {
            setCustomArray((customArray) => {
                return customArray.filter((item,i) => {
                    return i !== del_id;
                });
            });
        }
        if (cabinetArray.length) {
            setCabinetArray((cabinetArray) => {
                return cabinetArray.filter((item,i) => {
                    return i !== del_id;
                });
            });
        }
    }
    /* const deleteCustom = (del_id) =>{
        console.log(" del id "+del_id)
        if (customArray.length) {
            setCustomArray((customArray) => {
                return customArray.filter((item, i) => {
                    return i !== del_id;
                });
            });
        }
    } */
    const ResetInputValue = (val) =>  {
        setInputTxt(val);
        props.getResetName(props.id,val);
        props.getRoomId(props.id); 
    };
    const screenWidth  = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const ft = (screenHeight*13)/100;
    const roomHeight =  screenHeight-ft;

    const onSwipeTop = () =>{
        setFixHeight(50);
        setShowHeight(true);
    }
    return (
        <View  style={{height:roomHeight}}>
            <ScrollView keyboardShouldPersistTaps="always" 
                stickyHeaderIndices={[0]} 
                onScroll={()=>onSwipeTop()}
                style={[RoomStyles.scrollContainer]} 
            >   
                <View style={[Rstyles.roomHeader,{height: showHeight===false ? 'auto' :fixHeight}]}>
                    <View style={{flex:1,flexDirection:'row',marginTop: showHeight===false ? 0 : 5, }}>
                    {props.defaultRoom !== undefined ?
                        <TextInput
                            style={RoomStyles.roomInpt}
                            onChangeText={() => console.log('pressed')}
                            placeholder={' '}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            onFocus={() => setShouldHide(false)}
                            // value=""
                        />
                    :
                        <TextInput
                            style={RoomStyles.roomInpt}
                            type="text"
                            keyboardType="default"
                            onChangeText={(val)=> ResetInputValue(val)}
                            onFocus={() => setShouldHide(false)}
                            placeholder={` ${newName} `}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            value={inputTxt}
                        />
                    }
                    {props.defaultRoom !== undefined ?
                            null
                    :
                        <View>
                            {shouldHide ? (
                                <MaterialIcons {...props} name="edit" size={14} style={RoomStyles.editBtn} />
                            ) : null}
                        </View>
                    }
                    {props.defaultRoom !== undefined ?
                            null
                    :
                        <TouchableOpacity style={{flex:1, position: 'absolute', right:5}}>
                            <MaterialCommunityIcons name="dots-vertical" size={28} color="black" 
                            onPress={() => {MenuAnimateExpan()}} />
                        </TouchableOpacity>
                    }
                    </View>
                </View>
                <Animated.View style={[Rstyles.CustomPopUp,{position:'absolute', top: showHeight===false ? 1 : 1, right:2 },{...props.style, height:MenuAnim1, width:MenuAnim2}]}>
                    <RoomMenuPopUp MenuAnimateExpan={MenuAnimateExpan} 
                        id={props.id}
                        roomName={props.roomName} 
                        deleteRoom={props.deleteRoom}  
                        duplicateRoom={props.duplicateRoom}
                        MenuAnimateClose={MenuAnimateClose} 
                    />
                </Animated.View>
                {/* <View><Text>{' ' }</Text></View> */}
                <View style={{position:'relative', zIndex: 1}}>
                    <RoomEstimator 
                        stairName={stairName} 
                        customItemName={customItemName}
                        wallpaperName={wallpaperName}
                        wallName={wallName}
                        trimName={trimName}
                        cabinetName={cabinetName}
                        closetName={closetName}
                        doorName={doorName}
                        ceilingName={ceilingName}
                        prepWorkName={prepWorkName}
                        windowName={windowName}
                        customArray={customArray}
                        stairArray={stairArray}
                        wallpaperArray={wallpaperArray}
                        cabinetArray={cabinetArray}
                        windowArray={windowArray}
                        ceilingArray={ceilingArray}
                        trimArray={trimArray}
                        doorArray={doorArray}
                        closetArray={closetArray}
                        prepWorkArray={prepWorkArray}
                        wallArray={wallArray}
                        showHide={showHide}
                        fetchId={props.id}
                        deleteItem={deleteItem}
                        slideUp={slideUp}
                        setSlideUp={setSlideUp}
                        textChange={textChange}
                        setTextChange={setTextChange}
                        showHide={showHide}
                        setShowHide={setShowHide}
                    />
                </View> 
                {props.showModal ? (
                    <ItemModel  
                        setShowModal={props.setShowModal} 
                        showModal={props.showModal}
                        addCustom={addCustom}
                        addCabinet={addCabinet}
                        addCeiling={addCeiling}
                        addCloset={addCloset}
                        addPrepWork={addPrepWork}
                        addDoor={addDoor}
                        addWall={addWall}
                        addWallpaper={addWallpaper}
                        addWindow={addWindow}
                        addStair={addStair}
                        addTrim={addTrim}
                        index={props.index}
                        setSlideUp={setSlideUp}
                        setTextChange={setTextChange}
                        setShowHide={setShowHide}
                    />
                ): null }    
            </ScrollView>
            {showFooter === true ? 
            <View style={[Rstyles.footerSection]}>
                <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                    style={{width:50, height:50, borderRadius:50}}
                    onPress={() => {
                        setShowPen(true);
                        setShowCamera(false); 
                        setShowPrice(false);
                        setShowFooter(false);
                    }}
                >
                    <MaterialCommunityIcons style={{textAlign:'center',lineHeight:50, color:'gray'}} name="pencil" size={32}/>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                    style={{width:50, height:50, borderRadius:50}}
                    onPress={() => {
                        setShowPen(false);
                        setShowCamera(true); 
                        setShowPrice(false);
                        setShowFooter(false)
                    }}
                >
                    <MaterialCommunityIcons style={{textAlign:'center',lineHeight:50,color:"gray"}} name="camera-plus-outline" size={32} />
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                    style={{width:50, height:50, borderRadius:50}}
                    onPress={() => {
                        setShowPen(false);
                        setShowCamera(false); 
                        setShowPrice(true); 
                        setShowFooter(false);
                    }}
                >
                    <FontAwesome style={{textAlign:'center',lineHeight:50, color:'gray'}} name="dollar" size={30}/>
                </TouchableHighlight>
            </View>
            :null}
            {showPrice === true ? 
                <PriceSection  setShowFooter={setShowFooter} setShowPrice={setShowPrice} />  
            :null}
            {showCamera === true ? <AddImageSection setShowFooter={setShowFooter} setShowCamera={setShowCamera} />  :null}
            {showPen === true ? <AddNoteSection setShowFooter={setShowFooter} setShowPen={setShowPen} />  :null}   
        </View>
    )
}

const Rstyles = StyleSheet.create({
    roomHeader: {
        // flex:1,
        flexDirection:'row',
        alignItems: 'flex-start',
        backgroundColor: '#F5F5FF',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderColor:'#F5F5FF',
        borderWidth:0,
        position:'relative',
        marginTop:5,
    },
    CustomPopUp: {
        flex: 1, 
        flexDirection:'row', 
        alignItems:'flex-end',
        justifyContent:'flex-end', 
        zIndex: 10  
    },
    ItemPopUp: {
        flex: 1, 
        flexDirection:'row', 
        alignItems:'flex-end',
        justifyContent:'flex-end', 
        position:'absolute', 
        right:2, 
        top:-5, 
        zIndex: 10  
    },
    footerSection:{
        flexDirection:'row',
        alignItems:'flex-start',
        alignSelf:'flex-start',
        position:'relative',
        top:6,
        marginTop:5,
        marginLeft:0,  
        marginRight:7,
        height:70, 
    },
    roomContanier:{
       flexDirection:'column',
       position: 'absolute',
    }
});

export default Room;



