import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
function Rates() {
    return (
        <View style={styles.container1}>
            <Card style={styles.mycard}>
                <View style={styles.container2}>
                <Text>This is Rates page</Text>  
                </View>
            </Card>  
        </View>
    );
}

export default Rates;
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