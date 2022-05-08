import React from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, Image} from 'react-native';
import {Title,Checkbox, Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles }  from '../assets/Items/EstimatorStyle';
import {PerHrPlacehoder} from './Placeholder';


const PrepWork=(props)=>{
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
{/* Furniture Treatment================================ */}
                <View style={{marginTop:5}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Furniture Treatment</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Labor Cost:</Text>
                            <Text style={[Styles.midLabelColor,{marginLeft:-15}]}>Hours:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text>   
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerHrPlacehoder />
                            </View>
                            <View>
                                <View style={Styles.selectCutom}>
                                    <Picker  style={{ height: 25, width: 110 }}>
                                        <Picker.Item label="Hours" value="hours" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                    </Picker>
                                </View>
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
                    </View>
                </View>
{/* Window Treatment======================== */}
                <View style={{marginTop:10}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Window Treatment</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Labor Cost:</Text>
                            <Text style={[Styles.midLabelColor,{marginLeft:-15}]}>Hours:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text>   
                        </View>
                        <View style={Styles.flex}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerHrPlacehoder />  
                            </View>
                             <View>
                                <View style={Styles.selectCutom}>
                                    <Picker  style={{ height: 25, width: 110 }}>
                                        <Picker.Item label="Hours" value="hours" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                    </Picker>
                                </View>
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
                    </View>
                </View>
{/* Hardware & Lighting======================== */}
                <View style={{marginTop:10}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Hardware & Lighting</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Labor Cost:</Text>
                            <Text style={[Styles.midLabelColor,{marginLeft:-15}]}>Hours:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text>   
                        </View>
                        <View style={Styles.flex}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput 
                                    style={Styles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerHrPlacehoder />  
                            </View>
                             <View>
                                <View style={Styles.selectCutom}>
                                    <Picker  style={{ height: 25, width: 110 }}>
                                        <Picker.Item label="Hours" value="hours" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                    </Picker>
                                </View>
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
                    </View>
                </View>
{/* Mask & Cover ======================== */}
                <View style={{marginTop:10}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Mask & Cover</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Labor Cost:</Text>
                            <Text style={[Styles.midLabelColor,{marginLeft:-15}]}>Hours:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text>       
                        </View>
                        <View style={[Styles.flex]}>
                            <View>
                                <TextInput 
                                    style={Styles.OnlyInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerHrPlacehoder />
                            </View>
                             <View>
                                <View style={Styles.selectCutom}>
                                    <Picker  style={{ height: 25, width: 110 }}>
                                        <Picker.Item label="Hours" value="hours" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                    </Picker>
                                </View>
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
                    </View>
                </View>
                {/* Patch & Texture ======================== */}
                <View style={{marginTop:10}}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Patch & Texture</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Labor Cost:</Text>
                            <Text style={[Styles.midLabelColor,{marginLeft:-15}]}>Hours:</Text>  
                            <Text style={Styles.txtBold}>Total:</Text>       
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput 
                                    style={Styles.OnlyInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerHrPlacehoder />
                            </View>
                             <View>
                                <View style={Styles.selectCutom}>
                                    <Picker  style={{ height: 25, width: 110 }}>
                                        <Picker.Item label="Hours" value="hours" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                    </Picker>
                                </View>
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
                    </View>
                </View>
                <View style={Styles.hrLine}></View>
{/*================Total============== */}
                <View style={{marginTop:20}}>
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
                    <View style={{marginTop:20}}></View>
                </View>
        </View>
    )
}

export default PrepWork;