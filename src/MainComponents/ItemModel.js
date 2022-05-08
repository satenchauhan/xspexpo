import React,{useState} from "react";
import {
  Text,
  Dimensions,
  Modal,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Card } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ItemModel(props) {
  // const [showHide, setShowHide] = useState(false);
  const screenWidth  = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const footerHeight = (screenHeight*31)/100;
  
  const close = () =>{
    setTimeout(()=>{ props.setShowModal(false)}, 500)

  }
  return (
    <View style={[ItemStyle.centeredView]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          props.setShowModal(false);
        }}
       
      >
          <View style={ItemStyle.modalView}>
            <View style={[ItemStyle.itemSection,{width:screenWidth}]}>
              <TouchableHighlight
                activeOpacity={0.1}
                underlayColor="lightgray"
                style={ItemStyle.closeItem}
                onPress={() => props.setShowModal(!props.showModal)}
              >
                <Text style={ItemStyle.clsTxt}>
                  <MaterialCommunityIcons 
                    color="#fff"
                    name="close"
                    size={26}
                  />
                </Text>
              </TouchableHighlight>
              <View style={ItemStyle.ItemMenu}>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addPrepWork(props.index, "PrepWork");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                    }}
                  >
                    <Text style={[ItemStyle.itemTxt, { color: "black" }]}>
                      Prep Work
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    onPress={() => {
                      props.addCustom(props.index, "Custom");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                    }}
                    style={ItemStyle.itemBtn}
                  >
                    <Text style={ItemStyle.itemTxt}>Custom</Text>
                  </TouchableHighlight>
                </View>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addCabinet(props.index, "Cabinets");
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Cabinets</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addCloset(props.index, "Closets");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Closets</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addTrim(props.index, "Trim");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Trim</Text>
                  </TouchableHighlight>
                </View>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addWallpaper(props.index, "Wallpaper");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Wallpaper</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addWindow(props.index, "Windows");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Windows</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addCeiling(props.index, "Ceilings");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Ceilings</Text>
                  </TouchableHighlight>
                </View>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addStair(props.index, "Stairs");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Stairs</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addDoor(props.index, "Doors");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Door</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addWall(props.index, "Walls");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Walls</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
      </Modal>
    </View>
  );
}

const ItemStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // margin:8,
  },
  modalView: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5);',
    // width:'50%'
    // marginTop:'75%',
  },
  itemSection: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    backgroundColor: "#fff",
    position: "absolute",
    bottom:0, 
  },
  closeItem: {
    alignSelf: "center",
    backgroundColor: "#2196F3",
    borderRadius: 50,
    position:'absolute',
    top:-20,
    right:20
  },
  ItemMenu: {
    flex:1,
    alignItems:'flex-end',
    marginTop:35,
    padding: 10, 
  },
  clsTxt: {
    width:50,
    height:50,
    textAlign:'center',
    lineHeight: 50,
    color: "#fff",
  },
  itemBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemBtn: {
    width: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "rgba(128,128,128, 0.3)",
    // borderWidth:1,
    shadowColor: "#2196F3",
    elevation: 3,
    margin: 5,
  },
  itemTxt: {
    textAlign: "center",
    padding: 4,
    lineHeight: 25,
  }
});
