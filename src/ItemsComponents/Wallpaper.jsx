import React from 'react';
import { Text, View,TextInput, Image,TouchableOpacity} from 'react-native';
import {Title,IconButton,Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles }  from '../assets/Items/EstimatorStyle';
import { FtPlacehoder,PerSqftPlacehoder, SqftPlacehoder } from './Placeholder';


const Wallpaper=(props)=>{
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
        {/* Choose all that apply */}
            <View style={{marginTop:10}}> 
                    <Text style={Styles.optionTitle}>Choose all that apply</Text>
                    <View style={[Styles.flex,{paddingLeft:5}]}>
                        <View style={[Styles.flex,Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                            <Text style={{color:'black'}}>Install</Text>
                        </View>
                        <View style={[Styles.flex,Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                            <Text style={{color:'black'}}>Remove</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text> 
                    </View>
                </View>
{/* Install===================================== */}
                <View style={{marginTop:15}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Install</Text>
                        {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                    </View>
                    <View style={Styles.lwhSection}>
                        <View>
                            <Text style={Styles.inputLabel}>Length:</Text>
                            <View style={Styles.inptFlex}>
                                <TextInput 
                                    style={Styles.L_W_H_Input}
                                    name={'length'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"    
                                />
                                <FtPlacehoder />
                            </View>
                        </View>
                        <View>
                            <Text style={Styles.inputLabel}>Width:</Text>
                            <View style={Styles.inptFlex}>
                                <TextInput 
                                    style={Styles.L_W_H_Input}
                                    name={'width'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"    
                                />
                                <FtPlacehoder />
                            </View>
                        </View>
                        <View>
                            <Text style={Styles.inputLabel}>Height:</Text>
                            <View style={Styles.inptFlex}>
                                <TextInput 
                                    style={Styles.L_W_H_Input}
                                    name={'height'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"    
                                />
                                <FtPlacehoder />
                            </View>
                        </View>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Area:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text> 
                        </View>
                        <View style={[Styles.flex,{marginTop:4}]}>
                            <View>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerSqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"0"}
                                    placeholderTextColor={'black'}    
                                />
                                <SqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={[Styles.totalInpt,{width:85}]}
                                    name={'total'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={"black"}   
                                />
                            </View>
                        </View>
                    </View>
                </View>
{/* Repairs Required ======================== */}
                <View style={{marginTop:20}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required </Text>
                        {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                    </View>
                    <View style={[Styles.setPadding,{marginTop:2}]}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text>    
                        </View>
                        <View style={Styles.flex}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput 
                                    style={Styles.OnlyInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                /> 
                            </View>
                            <View style={Styles.flex}>
                                <IconButton icon={'minus'} color={'white'} size={23.5} style={Styles.minAddBtn} 
                                    onPress={() => setModalVisible(true)}
                                /> 
                                <TextInput 
                                    style={Styles.QtytOrCoatsInpt}
                                    name={'coats'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"
                                />
                                <IconButton icon={'plus'} color={'white'} size={23.5} style={Styles.minAddBtn}  
                                    onPress={() => setModalVisible(true)}
                                /> 
                            </View>
                            <View>
                                <TextInput 
                                    style={Styles.totalInpt}
                                    name={'total'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={"black"}   
                                />
                            </View>
                        </View>
                        <View style={{marginTop:15}}>
                            <View>
                                <Text style={[Styles.label,{textAlign:'right'}]}>Total Price : &nbsp;</Text>
                                <View style={Styles.bottomFlex}>
                                    <TextInput 
                                        style={Styles.lastTotalInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}    
                                    />
                                    {/* <LastTotalPlacehoder />   */}
                                </View>
                            </View> 
                        </View>
                        <Text style={{marginTop:10, textAlign:'center'}}>Note: Wallpaper cost not included in estimate</Text>
                    </View>
                    <View style={[Styles.hrLine,{opacity:0.1}]}></View>
                </View>
                {/* Remove===================================== */}
                <View style={{marginTop:15}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Remove</Text>
                        {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                    </View>
                    <View style={Styles.lwhSection}>
                        <View>
                            <Text style={Styles.inputLabel}>Length:</Text>
                            <View style={Styles.inptFlex}>
                                <TextInput 
                                    style={Styles.L_W_H_Input}
                                    name={'length'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"    
                                />
                                <FtPlacehoder />
                            </View>
                        </View>
                        <View>
                            <Text style={Styles.inputLabel}>Width:</Text>
                            <View style={Styles.inptFlex}>
                                <TextInput 
                                    style={Styles.L_W_H_Input}
                                    name={'width'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"    
                                />
                                <FtPlacehoder />
                            </View>
                        </View>
                        <View>
                            <Text style={Styles.inputLabel}>Height:</Text>
                            <View style={Styles.inptFlex}>
                                <TextInput 
                                    style={Styles.L_W_H_Input}
                                    name={'height'}
                                    placeholder={'0'}
                                    placeholderTextColor="black"    
                                />
                                <FtPlacehoder />
                            </View>
                        </View>
                    </View>
                    <View style={[Styles.setPadding,{marginTop:2}]}>
                        <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Area:</Text>  
                            <Text style={Styles.txtBold}>Total Price:</Text>   
                        </View>
                        <View style={[Styles.flex,{marginTop:4}]}>
                            <View>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerSqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"0"}
                                    placeholderTextColor={'black'}    
                                />
                                <SqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={[Styles.totalInpt,{width:85}]}
                                    name={'total'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={"black"}   
                                />
                            </View>
                        </View>
                    </View>
                </View>
{/*================Total============== */}
                <View style={{marginTop:15}}>
                    <View style={Styles.bottomTotal}>
                        <View>
                            <Text style={Styles.label}>Total Price:</Text>
                            <View>
                                <TextInput 
                                    style={[Styles.lastTotalInpt,{width:100}]}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                            </View>
                        </View> 
                    </View>
                    <View style={[Styles.hrLine,{marginTop:20}]}></View>
                </View>
{/*================SubTotal============== */}
                <View style={Styles.bottomTotal}>
                    <View style={{marginTop:10}}>
                        <Text style={Styles.label}>Sub Total Price:</Text>
                        <View>
                            <TextInput 
                                style={[Styles.lastTotalInpt,{width:110}]}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}    
                            />
                        </View>
                    </View> 
                </View>
            <View style={{marginTop:20}}></View>
        </View>
    );
}

export default  Wallpaper;


