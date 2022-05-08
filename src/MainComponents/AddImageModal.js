import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
/* 
   const { width, height } = Image.resolveAssetSource(image);
   const ratio = height / width;
   const SCREEN_WIDTH = Dimensions.get('window').width;
   
 */
const AddImageModal = (props) => {
    //Choose image from Library==========================
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
        if (Platform.OS !== "web") {
            const {
            status,
            } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
            }
        } else if (Platform.OS == "android") {
            const {
            status,
            } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };
    //Choose image from Library==========================End
    //Take Photo from Camera=============================Start
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
        })();
    }, []);

    const CamerapickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
        });
        // console.log(result);
        if (!result.cancelled) {
        setImage(result.uri);
        }
    };
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    //Take Photo from Camera====================End
  return (
    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.showModal}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.setShowModal(!props.showModal);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Upload Images</Text>
                <Text style={{ marginBottom: 15 }}>Choose Your Images</Text>
                <Pressable style={[styles.button]} onPress={CamerapickImage}>
                <View
                    style={{
                        width: 190,
                        padding: 8,
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                >
                    <MaterialIcons name="camera-alt" size={18} color="#fff"/>
                    <Text style={{ color: "#fff"}}>Choose from Camera</Text>
                    <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                </View>
                </Pressable>
                <Pressable style={[styles.button]} onPress={pickImage}>
                <View
                    style={{
                    width: 190,
                    padding: 8,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    }}
                >
                    <MaterialIcons name="photo-library" size={20} color="#fff" />
                    <Text style={{ color: "#fff" }}>Choose From Library</Text>
                    <Text style={{ color: "#fff", textAlign:'center'}}> {' '} </Text>
                </View>
                </Pressable>
                <Pressable
                style={styles.buttonClose}
                onPress={() => props.setShowModal(!props.showModal)}
                >
                <View
                    style={{
                    width: 190,
                    padding: 8,
                    // padingLeft:20 ,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    }}
                >
                    
                    <MaterialIcons name="close" size={20} color="#fff" />
                    <Text style={{ color: "#fff", textAlign:'center'}}> Cancel </Text>
                    <Text style={{ color: "#fff"}}> {' '} </Text>
                    
                </View>
                </Pressable>
            </View>
            </View>
        </Modal>
    </View>
  );
};


export default AddImageModal;

const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 45
        },
        modalView: {
            height:'75%',
            margin: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 5,
            paddingTop:'25%',
            padding: 55,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            width:'100%',
            backgroundColor: "#2196F3",
            borderRadius: 5,
            margin: 5,
            padding: 3,
            elevation: 2
        },
        modalButton: {
            backgroundColor: "#2196F3",
            borderRadius: 5,
            margin: 5,
            padding: 3,
            elevation: 2
        },
        buttonOpen: {
          backgroundColor: "#F194FF",
        },
        buttonClose: {
            width:'100%',
            backgroundColor:'red',
            borderRadius: 5,
            margin: 5,
            padding: 3,
            elevation: 2
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            fontSize: 25,
            textAlign: "center"
        }
  });
