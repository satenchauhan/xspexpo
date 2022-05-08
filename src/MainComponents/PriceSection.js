import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const PriceSection = (props) =>{
    return (
        <View style={[priceStyle.priceSection,{height:70}]}>
            <View style={{flexDirection:'row'}}>
                <View style={{marginTop:10}}>
                    <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                            style={{position:'relative', right:10, width:50, height:50, borderRadius:50}}
                            onPress={() => {props.setShowFooter(true); props.setShowPrice(false); }}
                    >
                        <MaterialCommunityIcons style={{textAlign:'center',lineHeight:50,color:"gray"}} name="reply" size={32} />
                    </TouchableHighlight>
                </View>
                <View>
                    <View style={priceStyle.totalPriceBtn}>
                        <TouchableOpacity>
                            <Text style={{fontSize:13, color:"#2196F3", paddingRight: 5 }}>Room Total</Text>
                        </TouchableOpacity>
                        <View style={priceStyle.vrLine}></View>
                        <TouchableOpacity>
                            <Text style={{fontSize:13, color:"gray", paddingLeft: 5 }}>Project Total</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, width: 156, borderBottomWidth:1, borderColor:'#909090', opacity:0.5, zIndex:1,marginTop:5, marginLeft:-8}}></View>
                    <View>
                        <View  style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between',marginLeft:5}}>
                            <Text style={priceStyle.titleText}>Total Paint</Text>
                            <Text style={{width:20}}>{' '}</Text>
                            <Text style={priceStyle.titleText}>Hours</Text>
                            <Text style={{width:20}}>{' '}</Text>
                            <Text style={priceStyle.titleText}>Total Price</Text>
                        </View>
                        <View style={{flexDirection:'row',  alignItems:'flex-start', justifyContent:'space-between',marginLeft:5}}>
                            <Text style={priceStyle.totalText}>136 Gal</Text>
                            <Text style={priceStyle.totalText}>136 </Text>
                            <Text style={priceStyle.totalText}>$100,000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default PriceSection;


const priceStyle = StyleSheet.create({
   
    priceSection:{
        marginTop:5,
        marginLeft:7,  
        marginRight:7,  
    },
    totalPriceBtn:{
        flex:1,
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'flex-start', 
        marginBottom:2, 
        marginLeft:-8
        // zIndex:-5,
    },
    titleText:{
        fontSize:14,
        color:'gray',
        fontWeight:'bold', 
        // padding:5
    },
    totalText:{
        fontSize:14,
        color:'black',
        fontWeight:'bold'
    },
    verticleLine: {
        height: 18,
        width: 1,
        backgroundColor: '#909090',
    },

})




