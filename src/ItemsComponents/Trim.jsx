import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Title, IconButton, Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles } from '../assets/Items/EstimatorStyle';
import { FtPlacehoder, PerLftPlacehoder } from './Placeholder';


const Trim = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
            <View style={{ marginTop: 18 }}>
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
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Total Linear:</Text>
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
                <View style={[Styles.hrLine, { opacity: 0.1 }]}></View>
                {/* Baseboards======================================== */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.collapstitle}>Baseboards</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={[Styles.setPadding, { marginTop: 2 }]}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Coats:</Text>
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
                                <PerLftPlacehoder />
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
                    {/* Primer Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Primer Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={[Styles.setPadding]}>
                            <View style={Styles.inputLabel}>
                                <Text style={Styles.labelColor}>Price:</Text>
                                <Text style={Styles.midLabelColor}>Coats:</Text>
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
                                    <PerLftPlacehoder />
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
                    {/* Caulking Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Caulking requried?</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={[Styles.setPadding]}>
                            <View style={Styles.inputLabel}>
                                <Text style={Styles.labelColor}>Price:</Text>
                                <Text style={Styles.midLabelColor}>Total Linear:</Text>
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
                                    <PerLftPlacehoder />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={Styles.priceInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}
                                    />
                                    <PerLftPlacehoder />
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
                    {/* Any Repairs Required========= */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Any Repairs Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={[Styles.setPadding]}>
                            <View style={Styles.inputLabel}>
                                <Text style={Styles.labelColor}>Price:</Text>
                                <Text style={Styles.midLabelColor}>Coats:</Text>
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
                                    <PerLftPlacehoder />
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
                    <View style={Styles.hrLine}></View>
                </View>
                {/* Baseboards End========================================= */}
                {/*Door Casing/Frames====================================== */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.collapstitle}>Door Casing/Frames</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <Text style={Styles.optionTitle}>Choose all that apply</Text>
                        <View style={[Styles.flex, { paddingLeft: 5 }]}>
                            <View style={[Styles.flex, Styles.rectangleBox]}>
                                <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                                <Text style={{ color: 'black' }}>Door Casing</Text>
                            </View>
                            <View style={[Styles.flex, Styles.rectangleBox]}>
                                <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                                <Text style={{ color: 'black' }}>Door Frames</Text>
                            </View>
                            <Text >{''}</Text>
                            <Text >{''}</Text>
                        </View>
                    </View>
                    {/* Door Casing======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Door Casing</Text>
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
                                    <PerLftPlacehoder />
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
                    {/* caulking Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Caulking requried?</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={Styles.setPadding}>
                            <View style={Styles.inputLabel}>
                                <Text style={Styles.labelColor}>Price:</Text>
                                <Text style={Styles.midLabelColor}>Total Linear:</Text>
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
                                    <PerLftPlacehoder />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={Styles.priceInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}
                                    />
                                    <PerLftPlacehoder />
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
                    {/* Repairs Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Repairs Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={Styles.setPadding}>
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
                                    <PerLftPlacehoder />
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
                            <View style={[Styles.selectBox, { marginBottom: 0 }]}>
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
                    <View style={[Styles.hrLine, { opacity: 0.1 }]}></View>
                    {/* Door Frame======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Door Frame</Text>
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
                                    <PerLftPlacehoder />
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
                        {/* Repairs Required========= */}
                        <View style={{ marginTop: 10 }}>
                            <View style={Styles.flex}>
                                <Text style={Styles.title}>Repairs Required</Text>
                                <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            </View>
                            <View style={Styles.setPadding}>
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
                                        <PerLftPlacehoder />
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
                                <View style={[Styles.selectBox, { marginBottom: 0 }]}>
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
                            {/*================Total============== */}
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
                            {/* <View style={[Styles.hrLine, { opacity: 0.1 }]}></View> */}
                        </View>
                    </View>
                </View>
                {/* End of Door Casing================== */}
                <View style={Styles.hrLine}></View>
                {/* End of Door Casing/Frame =================== */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.collapstitle}>Window Casing/Frames</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <Text style={Styles.optionTitle}>Choose all that apply</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={Styles.labelColor}>Window Casing</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={Styles.labelColor}>Window Frames</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Window Casing</Text>
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
                                    <PerLftPlacehoder />
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
                    {/* caulking Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Caulking requried?</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={Styles.setPadding}>
                            <View style={Styles.inputLabel}>
                                <Text style={Styles.labelColor}>Price:</Text>
                                <Text style={Styles.midLabelColor}>Total Linear:</Text>
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
                                    <PerLftPlacehoder />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={Styles.priceInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}
                                    />
                                    <PerLftPlacehoder />
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
                    {/* Repairs Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Repairs Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={Styles.setPadding}>
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
                                    <PerLftPlacehoder />
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
                            <View style={[Styles.selectBox, { marginBottom: 0 }]}>
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
                        {/*================Total============== */}
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
                        <View style={[Styles.hrLine, { opacity: 0.1 }]}></View>
                    </View>
                    {/* End of Window Casing==========================================*/}

                    {/* Issues here========================= */}
                    {/* Window Frame===============================================*/}
                    <View style={{ marginTop: 10 }}>
                        <View style={Styles.flex}>
                            <Text style={Styles.title}>Window Frame</Text>
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
                                    <PerLftPlacehoder />
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
                        <View>
                            {/* Repairs Required======== */}
                            <View style={{ marginTop: 10 }}>
                                <View style={Styles.flex}>
                                    <Text style={Styles.title}>Repairs Required</Text>
                                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                                </View>
                                <View style={Styles.setPadding}>
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
                                            <PerLftPlacehoder />
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
                                    <View style={[Styles.selectBox, { marginBottom: 0 }]}>
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
                        </View>
                        {/*==========Total========== */}
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
                    </View>
                    {/* End of  Window Frame===============================================*/}
                    {/* Issues here========================= */}
                </View>
                <View style={{ marginTop: 20 }}></View>
            </View>
    )
}

export default Trim;