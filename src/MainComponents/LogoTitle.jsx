import React from 'react';
import { Image, StyleSheet } from 'react-native';

function LogoTitle(props) {
    return (
        <Image
            style={styles.img}
            source={require('../assets/logos/title.png')}
        />
    );
}

export default LogoTitle;

const styles = StyleSheet.create({
    img:{
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
   
});
