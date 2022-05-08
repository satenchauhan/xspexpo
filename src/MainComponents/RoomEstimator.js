import React, { useState, useEffect, useRef } from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
import AddImageSection from './AddImageSection';
import AddNoteSection from './AddNoteSection';

const RoomEstimator =(props) =>{
    const [MarginTop, setMarginTop] = useState(0)
    const [input, setTextInput] = useState('');


    let  prepWorks = props.prepWorkArray.map((item, i) => {
        if ((props.prepWorkName)=="PrepWork"){
            if((i)==props.index){
                return(
                    <PrepWorkFrame key={i} prepId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <PrepWorkFrame key={i} prepId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });

    let  customs = props.customArray.map((item, i) => {
        if ((props.customItemName)=="Custom"){
            if((i)==props.index){
                return(
                    <CustomFrame key={i} custId={i} deleteItem={props.deleteItem}/>
                )
            }else{
                return(
                    <CustomFrame key={i} custId={i} deleteItem={props.deleteItem}/>
                )
            }
        }
    });

    let  cabinets = props.cabinetArray.map((item, i) => {
        if ((props.cabinetName)=="Cabinets"){
            if((i)==props.index){
                return(
                    <CabinetFrame key={i} cabId={i} deleteItem={props.deleteItem}/>
                )
            }else{
                return(
                    <CabinetFrame key={i} cabId={i} deleteItem={props.deleteItem}/>
                )
            }
        }
    });

    let  closets = props.closetArray.map((item, i) => {
        if ((props.closetName)=="Closets"){
            if((i)==props.index){
                return(
                    <ClosetFrame key={i} closetId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <ClosetFrame key={i} closetId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });

    let  trim = props.trimArray.map((item, i) => {
        if ((props.trimName)=="Trim"){
            if((i)==props.index){
                return(
                    <TrimFrame key={i}  trimId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <TrimFrame key={i}  trimId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });

    let  Wallpapers = props.wallpaperArray.map((item, i) => {
        if ((props.wallpaperName)=="Wallpaper"){
            if((i)==props.index){
                return(
                    <WallpaperFrame key={i}  wallPaperId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <WallpaperFrame key={i}  wallPaperId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });

    
    let  windows = props.windowArray.map((item, i) => {
        if ((props.windowName)=="Windows"){
            if((i)==props.index){
                return(
                    <WindowFrame key={i}  windowId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <WindowFrame key={i}  windowId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });
    let  doors = props.doorArray.map((item, i) => {
        if ((props.doorName)=="Doors"){
            if((i)==props.index){
                return(
                    <DoorFrame key={i}  doorId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <DoorFrame key={i}  doorId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });
    
    let  ceilings = props.ceilingArray.map((item, i) => {
        if ((props.ceilingName)=="Ceilings"){
            if((i)==props.index){
                return(
                    <CeilingFrame key={i}  ceilingId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <CeilingFrame key={i}  ceilingId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });
    let  walls = props.wallArray.map((item, i) => {
        if ((props.wallName)=="Walls"){
            if((i)==props.index){
                return(
                    <WallFrame key={i}  wallId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <WallFrame key={i}  wallId={i} deleteItem={props.deleteItem} />
                )
            }
        } 
    });

    let  stairs = props.stairArray.map((item, i) => {
        if ((props.stairName)=="Stairs"){
            if((i)==props.index){
                return(
                    <StairFrame key={i}  stairId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <StairFrame key={i}  stairId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    }); 
    
    const ref_inputSecond = useRef();
    const ref_inputThird = useRef();

    const setShow = () => {
        props.setTextChange('Hide');
        props.setSlideUp(true);
    }

    const resetShow = () =>{
        props.setTextChange('Show');
        props.setSlideUp(false);
    }

    useEffect(() => {
        props.setSlideUp(true);
        props.setTextChange('Hide')
    }, []);

    
    return (
      <View>
        <View style={[RoomStyles.estimatecard]}>
          <View style={RoomStyles.defaultField}>
            <TouchableOpacity
              style={RoomStyles.eyeBtn}
              onPress={() => {
                props.textChange === "Hide" ? resetShow() : setShow();
              }}
            >
              <MaterialIcons name="remove-red-eye" size={25} color="#2196F3" />
              <Text style={RoomStyles.eyeTxt}>{" "}
                {props.textChange} default measurements for this Room
              </Text>
            </TouchableOpacity>
          </View>
          {props.slideUp === true ? (
            <View style={RoomStyles.inputSection}>
              <View style={RoomStyles.inpt}>
                <Text style={RoomStyles.inptTxt}>Length:</Text>
                <TextInput
                  style={RoomStyles.inputs}
                  name="length"
                  keyboardType="decimal-pad"
                  returnKeyType="next"
                  placeholder="0"
                  placeholderTextColor="#333"
                  autoFocus={false}
                  onSubmitEditing={() => ref_inputSecond.current.focus()}
                  blurOnSubmit={false}
                />
                <Text>{""}</Text>
              </View>
              <View style={RoomStyles.inpt}>
                <Text style={RoomStyles.inptTxt}>Width:</Text>
                <TextInput
                  style={RoomStyles.inputs}
                  name="width"
                  keyboardType="decimal-pad"
                  returnKeyType="next"
                  placeholder="0"
                  placeholderTextColor="#333"
                  onSubmitEditing={() => ref_inputThird.current.focus()}
                  ref={ref_inputSecond}
                  blurOnSubmit={false}
                />
                <Text>{""}</Text>
              </View>
              <View style={RoomStyles.inpt}>
                <Text style={RoomStyles.inptTxt}>Height:</Text>
                <TextInput
                  style={RoomStyles.inputs}
                  name="height"
                  keyboardType="decimal-pad"
                  placeholder="0"
                  placeholderTextColor="#333"
                  ref={ref_inputThird}
                />
                <Text>{""}</Text>
              </View>
            </View>
          ) : null}

          {props.showHide === false ? (
            <View
              style={{
                width: "100%",
                paddingLeft: 3,
                paddingRight: 5,
                marginBottom: 25,
              }}
            >
              <View style={dStyles.clickBox}>
                <Text>Add your first item by clicking the </Text>
                <View style={dStyles.IconTxt}>
                  <Text style={dStyles.plusIcon}> + </Text>
                  <Text> Button </Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>
        <View style={{marginTop: -20}}>
          {customs}
          {Wallpapers}
          {stairs}
          {cabinets}
          {closets}
          {windows}
          {doors}
          {trim}
          {ceilings}
          {walls}
          {prepWorks}
        </View>
      </View>
    );
}

export default RoomEstimator;

const dStyles = StyleSheet.create({
        clickBox:{
            flexDirection: 'row', 
            alignItems: 'baseline', 
            justifyContent: 'center',
            borderStyle:'dashed', 
            borderWidth:1.5, 
            borderRadius:10, 
            padding:13, 
            backgroundColor:'#fff'
        },
        IconTxt:{ 
            flexDirection: 'row', 
            alignItems: 'baseline', 
            justifyContent: 'center' 
        },
        plusIcon:{
            backgroundColor:'#2196F3', 
            height: 20 ,
            width: 20,
            borderRadius:100, 
            paddingLeft:2, 
            marginLeft:3, 
            color:'white'
        },
})
