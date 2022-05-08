import React, { useState, useEffect, useRef } from 'react';
import {
    RefreshControl, TextInput, Text, View, StyleSheet,
    SafeAreaView, ScrollView,
    TouchableOpacity, TouchableHighlight,
    Dimensions, Animated, Easing,
} from 'react-native';
import {FAB, Portal, Provider, Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { RFrameStyle } from '../assets/css/RoomFrameStyle';
import Room from './Room';
import PriceSection from './PriceSection';
import { Styles } from '../assets/Items/EstimatorStyle';
import AddImageSection from './AddImageSection';
import AddNoteSection from './AddNoteSection';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const AddRoomFrame = (props) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [RoomOne, setRoomOne] = useState(true);
    const [roomArray, setRoomArray] = useState([]);
    const [buttonArray, setButtonArray] = useState([]);
    const [singleRoom, setSingleRoom] = useState([]);
    const [active, setActive] = useState(null);
    const [lastActive, setLastActive] = useState(null);
    const [copyActive, setCopyActive] = useState(null);
    const [lastCopyActive, setLastCopyActive] = useState(null);
    const [ButtonName, setButtonName] = useState('');
    const [resetName, setResetName] = useState(null);
    const [errorTxt, setErrorTxt] = useState(0);
    const [roomid, setRoomid] = useState('')
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(true);
    const [defaultR, setDefaultR] = useState(true);
    const [RoomName, setRoomName] = useState('');
    const [Rname, setRname] = useState('');
    const [copyId, setCopyId] = useState('');
    const [showC, setShowC] = useState(false);
    const [copyRoomArray, setCopyRoomArray] = useState([]);
    const [copyButtonArray, setCopyButtonArray] = useState([]);

    const [MarginLeft, setMarginLeft] = useState(0)
    const [showHide, setShowHide] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [showInput, setShowInput] = useState(true);
    const [showMargin, setShowMargin] = useState(false);
    const [scrollView, setScrollView] = useState('');
    const [viewLayout, setViewLayout] = useState([]);
    const [count, setCount] = useState(2);

    const [showModal, setShowModal] = useState(false);
 
    const screenWidth  = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const footerHeight = (screenHeight*31)/100;
    
    const l = buttonArray.length;
    const lastRoom = l + 2;

    useEffect(() => {  
        setRoomArray([]);
        setButtonArray([]);
        setRoomid(null);
        setButtonName('');
        setRoomName('');
        setRname('');
        setResetName('');
        setErrorTxt(0);
        setSingleRoom()
        setIndex(0);
        setCopyButtonArray([]);
        setCopyRoomArray([]);
        setCount(1);
        setDefaultR(true);
        setShow(false)
        setShowInput(true);
        setShowBtn(false);
        setMarginLeft(0)
        setShowMargin(false);
    }, []);
    let indexing = 0;
    const addMoreRoomWithActive = () => {
        if (ButtonName.trim() === "") {
            setErrorTxt(1);
            // setButtonName("")
            setShowBtn(false);
            setShowInput(true);
        } else {
            setErrorTxt(0);
            // let bid = index;
            let itemAdded = { indexing: indexing + 1 };
            roomArray.push({
                key: index,
                id: index,
                roomName: ButtonName,

            });
            setRoomArray(roomArray);
            /*=================================================== */
            buttonArray.push({
                key: index,
                bid: index,
                bName: ButtonName
            });
            setButtonArray(buttonArray);
            let len = buttonArray.length;

            if(len > 3){
                setMarginLeft(MarginLeft+(-100))
                setShowMargin(true);
            }
            let num = index;
            const screen1 = screenWidth / 2;
            setTimeout(() => {
                const elementOffset = viewLayout[num];
                if (elementOffset !== undefined) {
                    let x = elementOffset.x + (screen1 - (elementOffset.width / 2));
                    if (scrollView == null) {
                        return null
                    } else {
                        scrollView.scrollTo({
                            y: 0,
                            x: x,
                            animated: true,
                        });
                    }
                }
            }, 2000)
            setShowBtn(true);
            setShowInput(false);
            setRoomid(index);
            setIndex(index + 1);
            setCount(2);
            if (index == 0) {
                setActive(1);
            } else {
                setLastActive(len);
                setActive(null);
                setCopyActive(null);
                setLastCopyActive(null);
            }
            setButtonName('');
            setRname('');
            setDefaultR(false);
            setShow(true);
            setShowC(false);
        }
    };
    
    const onSwipeTop = () =>{
        setMarginTop(0);
        setSlide(false);
    }
    const onSwipeLeft = () =>{
        setMarginLeft(0)
        setShowMargin(false);
    }
    const  onButtonScroll = () =>{
        setMarginLeft(0)
        /* Animated.timing(                  
            MarginAnim1,                        
            {
                toValue:0,              
                duration: 200,
                useNativeDriver: false          
            }
        ).start(); */
        // setShowMargin(true);
    }
    const setLayout = (event, num) => {
        // console.log(num);
        const layout = event.nativeEvent.layout;
        viewLayout[num] = layout;
        // setViewLayout(viewLayout);
    }
    const ScrollLastActive = () => {
        let last = buttonArray.length;
        let lastid = last + 1;
        let num = last;
    }

    const SendButtonInput = (val) => {
        setButtonName(val);
    }

    const getResetName = (id, val) => {
        setResetName(val)
    }

    const getRoomId = (val) => {
        setRoomid(val);
    }
    
    const showRoom = (id, activeNum) => {
        setRoomid(id);
        setLastActive(null);
        setShowC(false);
        setShow(true)
    }

    const showActive = (activeNum) => {
        setActive(activeNum);
        setLastActive(null);
        setCopyActive(null);
        setLastCopyActive(null);
    }
    const showLastActiveOnClick = (activeNum) => {
        setLastActive(activeNum);
        setActive(null);
        setCopyActive(null);
        setLastCopyActive(null);
    }
    const deleteRoom = (id) => {
        // console.log("del id "+id)
        if (buttonArray.length) {
            setButtonArray((buttonArray) => {
                return buttonArray.filter((btn, i) => {
                    return btn.bid !== id;
                });
            });
        }
        if(roomArray.length) {
            setRoomArray((roomArray) => {
                return roomArray.filter((room, i) => {
                    return room.id !== id;
                });
            });
        }
        if(copyButtonArray.length){
            setCopyButtonArray((copyButtonArray) => {
                return copyButtonArray.filter((item, i) => {
                    return item.cbid !== id;
                });
            });
        }
        if(copyRoomArray.length){
            setCopyRoomArray((copyRoomArray) => {
                return copyRoomArray.filter((item, i) => {
                    return item.cid !== id;
                });
            });
        }
        let len = roomArray.length;
        let restData = roomArray.filter((obj, i) => {
            return obj.id == (id + 1);
        });
        setRoomid(id + 1);
        setShow(true);
    }
    const duplicateRoom = (id, rm_name) => {
        let getName = rm_name.match(/[a-z]+|\d+/ig)
        const Rname = getName[0];
        let len = copyButtonArray.length;
        let num = len + 1;
        let Bname = Rname;
        let number = ("("+count+")")
        
        /* Copy Buttons */
        let buttonCopies = [...copyButtonArray, { key: len, cbid: num, bName: Bname +" "+ number}];
        setCopyButtonArray(buttonCopies);
       
        /* Copy Room */
        let copies = [...copyRoomArray, { key: len, cid: num, roomName: Rname +" "+ number}];
        setCopyRoomArray(copies);
        setCount(count + 1);

        setCopyId(id + 1);
        if (count == 2) {
            setCopyActive(len + 1);
        } else {
            setLastCopyActive(len + 1);
            setCopyActive(null)
        }
        setLastCopyActive(len + 1);
        setLastActive(null);
        setActive(null);
        setShowC(true);
        setShow(false);
    }

    const showCopyActive = (activeNum) => {
        setCopyActive(activeNum);
        setLastCopyActive(null);
        setLastActive(null);
        setActive(null);
    }
    const showLastCopyActiveOnClick = (activeNum) => {
        setCopyActive(null);
        setLastCopyActive(activeNum);
        setLastActive(null);
        setActive(null);
    }

    let ButtonArrayList = buttonArray.map((btn, i) => {
        let activeNum = i + 1;
        let len = buttonArray.length;
        let last = len + 2;
        if ((i) == indexing) {
            return (
                <TouchableOpacity key={btn.key} bid={btn.bid} style={active === activeNum ? RFrameStyle.btnActive : RFrameStyle.btnInactive}
                    onPress={() => { showRoom(btn.bid); showActive(activeNum) }}
                    onLayout={(event) => { setLayout(event, last) }}
                >
                    <Text
                        style={active === activeNum ? RFrameStyle.ActiveColor : RFrameStyle.InactiveColor}>
                        {btn.bName}
                    </Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity key={btn.key} bid={btn.bid} style={lastActive === activeNum ? RFrameStyle.btnActive : RFrameStyle.btnInactive}
                    onPress={() => { showRoom(btn.bid); showLastActiveOnClick(activeNum) }}
                    onLayout={(event) => { setLayout(event, last) }}
                >
                    <Text
                        style={lastActive === activeNum ? RFrameStyle.ActiveColor : RFrameStyle.InactiveColor}>
                        {btn.bName}
                    </Text>
                </TouchableOpacity>
            )
        }
    })

    let RoomArrayList = roomArray.map((room, i) => {
        if (room.id === roomid) {
            return (
                <Room key={room.key} id={room.id}
                    roomName={room.roomName}
                    getResetName={getResetName}
                    getRoomId={getRoomId}
                    deleteRoom={deleteRoom}
                    duplicateRoom={duplicateRoom}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )
        }
    })

    const showCopyRoom = (id) => {
        // console.log("showCopy " + id);
        setCopyId(id);
        setActive(id + 1);
        setLastActive(null);
        setShowC(true);
    }

    // console.log(copyButtonArray);
    let CopyButtonList = copyButtonArray.map((item, i) => {
        let activeNum = i + 1;
        let num = activeNum + 1;
        // console.log(item);
        if ((i) == indexing) {
            return (
                <TouchableOpacity key={i} bid={item.cbid} style={
                    copyActive === activeNum ? RFrameStyle.btnActive : RFrameStyle.btnInactive
                    }
                    onPress={() => { showCopyRoom(item.cbid); showCopyActive(activeNum) }}
                    onLayout={(event) => { setLayout(event, activeNum) }}
                >
                    <Text
                        style={copyActive === activeNum ? RFrameStyle.ActiveColor : RFrameStyle.InactiveColor}>
                        {item.bName}
                    </Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity key={i} bid={item.cbid} style={
                    lastCopyActive === activeNum ? RFrameStyle.btnActive : RFrameStyle.btnInactive
                    }
                    onPress={() => { showCopyRoom(item.cbid); showLastCopyActiveOnClick(activeNum) }}
                    onLayout={(event) => { setLayout(event, activeNum) }}
                >
                    <Text
                        style={lastCopyActive === activeNum ? RFrameStyle.ActiveColor : RFrameStyle.InactiveColor}>
                        {item.bName}
                    </Text>
                </TouchableOpacity>
            )
        }
    })

    let CopyRoomList = copyRoomArray.map((room, i) => {
        let n = i + 1;
        let num = n + 1;
        if (room.cid === copyId) {
            return (
                <Room key={i} id={room.cid}
                    roomName={room.roomName}
                    getResetName={getResetName}
                    getRoomId={getRoomId}
                    deleteRoom={deleteRoom}
                    duplicateRoom={duplicateRoom}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )
        }
    })

    //Add Room Buttons dynamically
    return (
        <SafeAreaView style={[RFrameStyle.safeView]} >
            <StatusBar backgroundColor="#051E75" style="light" />
            <View style={[RFrameStyle.stickySection]}>
                <View style={RFrameStyle.addRoomBtn}>
                    <View style={[RFrameStyle.addItem, { marginBottom: 5 }]}>
                        {showInput === true ?
                            <View style={styles.mainInput}>
                                <TouchableHighlight
                                    activeOpacity={0.6}
                                    underlayColor="#2196F3"
                                    onPress={() => { addMoreRoomWithActive(); ScrollLastActive() }}
                                    style={styles.submit}
                                >
                                    <MaterialCommunityIcons style={{ lineHeight: 35, textAlign: 'center' }} name="check-outline" size={22} />
                                </TouchableHighlight>
                                <View style={styles.enterInpt}>
                                    <TextInput
                                        style={{ flex: 1, fontSize: 18, paddingLeft: 5 }}
                                        type="text"
                                        onChangeText={(val) => SendButtonInput(val)}
                                        placeholder={'Enter Room Name '}
                                        placeholderTextColor="black"
                                        underlineColorAndroid="transparent"
                                        borderWidth={errorTxt}
                                        borderRadius={9}
                                        borderColor="red"
                                        value={ButtonName}
                                        allowFontScaling={false}
                                        onSubmitEditing={() => {addMoreRoomWithActive()}}
                                    />
                                    <TouchableOpacity style={{ alignSelf: 'flex-end', }}
                                        onPress={() => { setShowInput(false); setShowBtn(true) }}
                                    >
                                        <MaterialCommunityIcons style={{ paddingLeft: 10 }} color="gray" name="close-circle-outline" size={26} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : null}
                        {showBtn === true ?
                            <TouchableOpacity onPress={() => { setShowInput(true); setShowBtn(false) }}>
                                {showBtn === true ?
                                    <View style={[RFrameStyle.RoomBtn, { backgroundColor: 'white' }]} >
                                        <View><Text>Room <AntDesign style={{ paddingLeft: 10 }} name="plus" size={23} /></Text></View>
                                    </View>
                                    : null}
                            </TouchableOpacity>
                            : null}

                        {showBtn === true ?
                            <ScrollView horizontal={true} keyboardShouldPersistTaps="always"
                                style={{ flex: 1, marginTop: 2 }}
                                onTouchStart={onSwipeLeft}
                                onScroll={onButtonScroll}
                                contentContainerStyle={{marginLeft: showMargin === true ? MarginLeft : null}}
                                ref={(scrollView) => { setScrollView(scrollView) }}
                                scrollEventThrottle={136}
                            >
                                {ButtonArrayList}
                                {CopyButtonList}
                            </ScrollView>
                            : null}
                    </View>
                </View>
            </View>
            <View style={styles.roomSection}> 
                <View>
                    {show ? (RoomArrayList) : null}
                </View>
                <View>
                    {showC ? (CopyRoomList) : null}
                </View>
                <View>
                    {defaultR === true ?
                        <Room
                            id={'1'}
                            defaultRoom={"Room "}
                            getRoomId={getRoomId}
                            getResetName={getResetName}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                        : null}
                </View>
            </View>
            <View style={{alignSelf:'flex-end',position:'absolute', right:20, bottom:45,}}>
                <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                    style={{width:50, height:50, backgroundColor:"#2196F3", borderRadius:50}}
                    onPress={() => {setShowModal(true)}}
                >
                    <Text style={{textAlign:'center',lineHeight:50, color:'#fff'}}>
                        <AntDesign name="plus" size={23}/>
                    </Text>
                </TouchableHighlight>
            </View>   
        </SafeAreaView>
    );
}

export default AddRoomFrame;

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    mainInput: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    enterInpt: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: "rgba(128,128,128, 0.3)",
        borderWidth: 1,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowOpacity: 1,
        elevation: 5,
        padding: 4,
        marginLeft: 5,
        marginRight: 8,
    },
    submit: {
        width: 38,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: "rgba(128,128,128, 0.3)",
        borderWidth: 1,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowOpacity: 1,
        elevation: 5,
        marginRight: 4,
        marginLeft: 3
    },
    roomSection:{
        marginLeft:2, 
        marginRight:2,
        // paddingTop:2,
        // borderRadius:10,
        // borderColor:"rgba(128,128,128, 0.3)",
        // borderWidth:2
    },
});


