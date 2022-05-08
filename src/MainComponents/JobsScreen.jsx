import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Text, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

function JobsScreen(props) {
    return (
        <SafeAreaView>
            <View style={styles.container1}>
                <StatusBar backgroundColor="rgba(83, 83, 83, 0.58)"  style="light"  />
                <View style={styles.mycard}>
                    <View style={styles.container2}>
                    <Text>This is jobs page</Text>  
                    </View>
                </View>  
            </View>
        </SafeAreaView>
    );
}

export default JobsScreen;

const styles = StyleSheet.create({
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
        width: '80%',
        height: '50%'
    }
   
});