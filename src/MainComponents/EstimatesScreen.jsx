import React from 'react';
import { 
  Text, View, ScrollView, StyleSheet, Image, SafeAreaView, 
  TouchableHighlight, StatusBar, Platform, 
} from 'react-native';
// or any pure javascript modules available in npm
import { Card, Title } from 'react-native-paper';
import {EstimatorFloatButtons} from './EstimatorFloatButtons';

function EstimatesScreen(props) {
    return (
        <SafeAreaView style={styles.safeViewArea}>
            <ScrollView horizontal={false}>
                <View style={styles.container1}>
                    <Card style={styles.mycard}>
                        <Title style={{textAlign:'center'}}>Estimator</Title>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:20, fontWeight:'bold', fontStyle:'italic',  margin:10}}>Instructions:</Text>
                            <Text style={styles.estText}>1. Add an area to get started.</Text>
                            <Text style={styles.estText}>2. Keep adding more areas until finished.</Text>
                            <Text style={styles.estText}>3. When finished click "Create" button.</Text>
                            <Text style={styles.estText}>4. Add a client and send an Estimates.</Text>
                            <Text style={styles.estText}>5. Estimator create to estimates which will show up in your ilst. </Text>
                        </View>
                        <Text style={{fontSize:15,fontWeight:'bold', marginLeft:8, marginTop:15}}>Need Help ? Watch our user guide videos [here]</Text>
                        <View style={styles.bottomSec}>
                            <Text style={styles.clk}>Click here to get started</Text>
                            <Image style={styles.arrow} source={require('../assets/logos/arrow2.png')} />
                        </View>
                    </Card> 
                </View>
            </ScrollView>
            <EstimatorFloatButtons/> 
        </SafeAreaView>
    );
}

export default EstimatesScreen;

const styles = StyleSheet.create({
    safeViewArea: {
        flex: 1,
        backgroundColor: "#F2F6F9",
        // paddingTop: Platform.OS === "android" ? 40 : 0,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    scrollContainer:{
        // flex:1, 
        backgroundColor: "#F2F6F9", 
        flexDirection: 'row', // horizontal
        justifyContent: 'center', //main
        alignItems: "center", //secondary
        alignContent: 'center'
    },
    container1: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    mycard:{
        marginTop:20,
        width: '92%',
        height: '100%',
        // paddingBottom:50
    },
    bottomSec:{
         flexDirection:'column',
         alignItems:'flex-end',
         justifyContent:'flex-end',
    },
    clk:{
        fontSize:15,
        position:'absolute',
        bottom: 65,
        transform:[{ rotate: "-45deg" }]
    },
    arrow:{
        marginTop:30,
        width:60, 
        resizeMode:'contain', 
        transform:[{ rotate: "15deg" }]
    },
    estText:{
        color:'#576574',
        fontWeight:'bold', 
        margin:8
    }
   
});