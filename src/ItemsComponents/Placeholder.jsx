import React from 'react';
import {Text,TextInput,} from 'react-native';
import { Styles }  from '../assets/Items/EstimatorStyle';

const PerSqftPlacehoder=()=>{
    return(
        <Text style={Styles.SqftPlaceholder}>{"/sqft"}</Text>
        /*
        <TextInput 
            style={Styles.SqftPlaceholder}
            placeholder={"/sqft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};

const SqftPlacehoder=()=>{
    return(
        <Text style={Styles.SqftPlaceholder}>{"sqft"}</Text>
        /*
        <TextInput 
            style={Styles.SqftPlaceholder}
            placeholder={"/sqft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};
const SidePlacehoder=()=>{
    return(
        <TextInput 
            style={Styles.SqftPlaceholder}
            placeholder={"/side"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
    );
};

const FtPlacehoder=()=>{
    return(
        <Text style={Styles.FtPlaceholder}>{"Ft"}</Text>
        /*
        <TextInput 
            style={}
            placeholder={"Ft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};
const LastTotalPlacehoder=()=>{
    return(
        <Text style={Styles.lastTotalPlacehoder}>{"Ft"}</Text>
        /*
        <TextInput 
            style={Styles.lastTotalPlacehoder}
            placeholder={"Ft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};
const PerLftPlacehoder=()=>{
    return(
        <Text style={Styles.SqftPlaceholder}>{"/Lft"}</Text>
        /*
        <TextInput 
            style={Styles.SqftPlaceholder}
            placeholder={"/sqft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};
const PerEachPlacehoder=()=>{
    return(
        <Text style={[Styles.SqftPlaceholder,{marginLeft:10}]}>{"/ea"}</Text>
        /*
        <TextInput 
            style={Styles.SqftPlaceholder}
            placeholder={"/sqft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};
const PerHrPlacehoder=()=>{
    return(
        <Text style={[Styles.SqftPlaceholder,{marginLeft:10}]}>{"/hr"}</Text>
        /*
        <TextInput 
            style={Styles.SqftPlaceholder}
            placeholder={"/sqft"}
            placeholderTextColor={'#b2bec3'}
            editable={false}
        /> 
        */
    );
};

export {PerSqftPlacehoder,SqftPlacehoder,SidePlacehoder,FtPlacehoder,LastTotalPlacehoder,PerLftPlacehoder, PerEachPlacehoder,PerHrPlacehoder};