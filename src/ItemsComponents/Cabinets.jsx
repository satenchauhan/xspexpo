import React from 'react';
import { Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import {Title,IconButton,Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles }  from '../assets/Items/EstimatorStyle';
import { PanelStyle } from '../assets/Items/PanelStyle';
import {PerSqftPlacehoder } from './Placeholder';


const Cabinets = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            {/* Use this area dimensions */}
            <View style={{ marginTop: 10 }}>
                <Text style={Styles.optionTitle}>Cabinet Type(select all that apply)</Text>
                <View style={{ marginLeft: 10 }}>
                    <View style={PanelStyle.iconsFlex}>
                        <View style={[PanelStyle.Box, { marginRight: 10 }]}>
                            <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../assets/Images/Cabinet-door.png')} />
                            <Text style={PanelStyle.IconTitle}>1 Panel</Text>
                        </View>
                        <View style={PanelStyle.Box}>
                            <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../assets/Images/cabinet-drawers.png')} />
                            <Text style={PanelStyle.IconTitle}>3-7 Panel</Text>
                        </View>
                        <View style={PanelStyle.noBox}>
                            <Text>{''}</Text>
                        </View>
                        <View style={PanelStyle.noBox}>
                            <Text>{''}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* Cabinet Doors */}
            <View style={{ marginTop: 15 }}>
                <Text style={Styles.optionTitle}>Cabinet Doors</Text>
                <View style={[Styles.flex, { paddingLeft: 5 }]}>
                    <View style={[Styles.flex, Styles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Flat</Text>
                    </View>
                    <View style={[Styles.flex, Styles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Paneled</Text>
                    </View>
                    <View style={[Styles.flex, Styles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>French</Text>
                    </View>
                    <Text >{''}</Text>
                </View>
            </View>
            {/* Flat===================================== */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Flat</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
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
                            <PerSqftPlacehoder />
                        </View>
                        <View style={Styles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={Styles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                            <TextInput
                                style={Styles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={Styles.minAddBtn}
                                onPress={() => console.log('pressed')}
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
                </View>
            </View>
            {/* Paneled======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Paneled</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
                        <Text style={Styles.txtBold}>Total:</Text>
                    </View>
                    <View style={Styles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={Styles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
                        </View>
                        <View style={Styles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={Styles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                            <TextInput
                                style={Styles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={Styles.minAddBtn}
                                onPress={() => console.log('pressed')}
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
                </View>
            </View>
            {/* French======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>French</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
                        <Text style={Styles.txtBold}>Total:</Text>
                    </View>
                    <View style={Styles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={Styles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
                        </View>
                        <View style={Styles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={Styles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                            <TextInput
                                style={Styles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={Styles.minAddBtn}
                                onPress={() => console.log('pressed')}
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
                </View>
            </View>
            {/* Repairs Required ======================== */}
            <View style={{ marginTop: 20 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Repairs Required </Text>
                    {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
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
                            {/* <SqftPlacehoder />    */}
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
                </View>
            </View>
            {/* Include Paint Cost */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Include Paint Cost?</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.includeCost}>
                    <View style={Styles.selectBox}>
                        <Text style={Styles.select}>Select Paint Finish </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => setShouldShow(!shouldShow)} />
                    </View>
                    <View style={Styles.selectList}>
                        {/*  
                                <Text style={Styles.selectCost}>Flat Latex</Text>
                                <Text style={Styles.selectCost}>Eggshell Latex</Text>
                                <Text style={Styles.selectCost}>Satin Latex</Text>
                                <Text style={Styles.selectCost}>Semi-Gloss Latex</Text>
                                <Text style={Styles.selectCost}>Gloss Latex</Text>
                                <Text style={[Styles.selectCost,{paddingBottom:10}]}>High Gloss Latex</Text>
                            */}
                    </View>
                    <View style={[Styles.selectBox, { marginBottom: 0, }]}>
                        <Text style={Styles.select}>Select Paint Quality </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => setShouldShow(!shouldShow)} />
                    </View>
                    <View style={[Styles.selectList, { marginTop: 0 }]}>
                        {/*  
                                <Text style={Styles.selectCost}>Economy</Text>
                                <Text style={Styles.selectCost}>Contractor</Text>
                                <Text style={Styles.selectCost}>Standard</Text>
                                <Text style={Styles.selectCost}>Quality</Text>
                                <Text style={Styles.selectCost}>Superior</Text>
                                <Text style={[Styles.selectCost,{paddingBottom:10}]}>Premium</Text>
                            */}
                    </View>
                </View>
            </View>
            <View style={[Styles.hrLine, { opacity: 0.1 }]}></View>
            {/* Drawers===================== */}
            <View style={{ marginTop: 15 }}>
                <Text style={Styles.title}>Drawers</Text>
                <View style={[Styles.flex, { paddingLeft: 5 }]}>
                    <View style={[Styles.flex, Styles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Flat</Text>
                    </View>
                    <View style={[Styles.flex, Styles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Paneled</Text>
                    </View>
                    <View style={[Styles.flex, Styles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>French</Text>
                    </View>
                    <Text >{''}</Text>
                </View>
            </View>
            {/* Flat===================================== */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Flat</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
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
                            <PerSqftPlacehoder />
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
                </View>
            </View>
            {/* Paneled======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Paneled</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
                        <Text style={Styles.txtBold}>Total:</Text>
                    </View>
                    <View style={Styles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={Styles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
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
                </View>
            </View>
            {/* French======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>French</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
                        <Text style={Styles.txtBold}>Total:</Text>
                    </View>
                    <View style={Styles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={Styles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
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
                </View>
            </View>
            {/* Repairs Required ======================== */}
            <View style={{ marginTop: 20 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Repairs Required </Text>
                    {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
                    <View style={Styles.inputLabel}>
                        <Text style={Styles.labelColor}>Price:</Text>
                        <Text style={Styles.midLabelColor}>Quantity:</Text>
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
                            {/* <SqftPlacehoder />    */}
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
                </View>
            </View>
            {/* Include Paint Cost */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Include Paint Cost?</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.includeCost}>
                    <View style={Styles.selectBox}>
                        <Text style={Styles.select}>Select Paint Finish </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => setShouldShow(!shouldShow)} />
                    </View>
                    <View style={Styles.selectList}>
                        {/*  
                                <Text style={Styles.selectCost}>Flat Latex</Text>
                                <Text style={Styles.selectCost}>Eggshell Latex</Text>
                                <Text style={Styles.selectCost}>Satin Latex</Text>
                                <Text style={Styles.selectCost}>Semi-Gloss Latex</Text>
                                <Text style={Styles.selectCost}>Gloss Latex</Text>
                                <Text style={[Styles.selectCost,{paddingBottom:10}]}>High Gloss Latex</Text>
                            */}
                    </View>
                    <View style={[Styles.selectBox, { marginBottom: 0, }]}>
                        <Text style={Styles.select}>Select Paint Quality </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => setShouldShow(!shouldShow)} />
                    </View>
                    <View style={[Styles.selectList, { marginTop: 0 }]}>
                        {/*  
                                <Text style={Styles.selectCost}>Economy</Text>
                                <Text style={Styles.selectCost}>Contractor</Text>
                                <Text style={Styles.selectCost}>Standard</Text>
                                <Text style={Styles.selectCost}>Quality</Text>
                                <Text style={Styles.selectCost}>Superior</Text>
                                <Text style={[Styles.selectCost,{paddingBottom:10}]}>Premium</Text>
                            */}
                    </View>
                </View>
            </View>
            {/*================Total============== */}
            <View>
                <View style={Styles.bottomTotal}>
                    <View>
                        <Text style={Styles.label}>Total Price:</Text>
                        <View>
                            <TextInput
                                style={[Styles.lastTotalInpt, { width: 100 }]}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                        </View>
                    </View>
                </View>
                <View style={[Styles.hrLine, { marginTop: 20 }]}></View>
            </View>
            {/*================Sub Total============== */}
            <View style={{ marginTop: 15 }}>
                <View style={Styles.bottomTotal}>
                    <View>
                        <Text style={Styles.label}>Sub Total Price:</Text>
                        <View>
                            <TextInput
                                style={[Styles.lastTotalInpt, { width: 110 }]}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}></View>
            </View>
        </View>
    )
}

export default Cabinets;