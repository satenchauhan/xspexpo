import React, {useState, useEffect, useRef} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TouchableHighlight,Animated,Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Styles }  from '../assets/Items/EstimatorStyle';
import Windows from './Windows';
import DeleteItemPopUp from '../MainComponents/DeleteItemPopUp';

const WindowFrame=(props)=>{
    const [openUp, setOpenUp] = useState(false);
    const [showHide, setShowHide] = useState(true);
    const [textLayoutHeight,setTextLayoutHeight] = useState(0);
    const [updatedHeight,setUpdatedHeight] = useState(0);
    const [expand,setExpand] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const DelPopUpWidth = 160;
    const DelPopUpHeight = 208;
    const DelAnim1 = useRef(new Animated.Value(0)).current;
    const DelAnim2 = useRef(new Animated.Value(0)).current;
    const deleteOpen = () =>{                  
        Animated.timing(                  
            DelAnim1,                        
            {
            toValue:DelPopUpHeight,              
            duration: 100,
            useNativeDriver: false          
            }
        ).start();     
        Animated.timing(                 
            DelAnim2,           
            {
            toValue: DelPopUpWidth,                  
            duration: 100, 
            useNativeDriver: false             
            }
        ).start();                        
    }
    const deleteClose = () => {                        
        Animated.timing(                  
            DelAnim1,                        
            {
            toValue:0,              
            duration: 50,
            useNativeDriver: false          
            }
        ).start();     
        Animated.timing(                 
            DelAnim2,           
            {
            toValue:0,                  
            duration: 50, 
            useNativeDriver: false             
            }
        ).start();                        
    }
    const collapsUp = () => {
        setOpenUp(true);
    }
    const collapsDown = () =>{
        setOpenUp(false);
    }

    useEffect(() => {
        setShowPopUp(false);
        setOpenUp(false)
    }, []);
    return (
        <View style={Styles.OuterSection}>
            <View style={Styles.areaSection}>
                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                        <TouchableOpacity activeOpacity={0.3} underlayColor="#2196F3" style={{flex:1}}
                            onPress={() => { openUp == false ? collapsUp() : collapsDown();setShowPopUp(false);}}
                        >
                            <Text style={Styles.sectionTitle}>Windows</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.3} underlayColor="#2196F3"
                            onPress={() => { openUp == false ? collapsUp() : collapsDown();setShowPopUp(false);}}
                        >
                            {openUp === true ? <Text style={Styles.middlePrice}>$15000.76</Text> :null}
                        </TouchableOpacity>
                        <View style={{marginLeft:20,}}>
                            <TouchableHighlight activeOpacity={0.3}  underlayColor='#fff' onPress={() => {
                                deleteOpen();
                                setShowPopUp(true);
                                collapsUp();
                            }} >
                                <MaterialIcons name="close" size={22} style={{lineHeight:35}} />
                            </TouchableHighlight>
                       </View>
                    </View>
                </View>
                {showPopUp === true ? 
                <Animated.View style={[Styles.deletePopUp,{...props.style, height:DelAnim1, width:DelAnim2}]}>
                    <DeleteItemPopUp
                        deleteClose={deleteClose}
                        setShowPopUp={setShowPopUp}
                    />
                </Animated.View>
                :null}
                { openUp === false ? (
                <Windows />
                ):null}
            </View>
            {/* End of Area Section */}
        </View>
    )
}

       

export default WindowFrame;