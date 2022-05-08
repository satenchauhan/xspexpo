import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Title, IconButton, Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles } from '../assets/Items/EstimatorStyle';
import { PerEachPlacehoder } from './Placeholder';


const Stairs = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            {/* Tread================ */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.collapstitle}>Tread</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Tread Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of  Tread  */}
            {/* Landing================ */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.collapstitle}>Landing</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Landings</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
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
                    </View>
                </View>
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
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
                    </View>
                </View>
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of Landing  */}
            {/* Winders================ */}
            <View style={{ marginTop: 10 }}>
                <View>
                    <View style={Styles.flex}>
                        <Text style={Styles.collapstitle}>Winders</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Winders Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
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
                    </View>
                </View>
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
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
                    </View>
                </View>
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of Winders  */}
            {/* Risers================ */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.collapstitle}>Risers</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Riser Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
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
                    </View>
                </View>
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
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
                    </View>
                </View>
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of  Risers   */}
            {/* Handrail================ */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.collapstitle}>Handrail</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Handrail Length</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
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
                    </View>
                </View>
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
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
                    </View>
                </View>
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of  Handrail =============================  */}
            {/* Spindles======================================= */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.collapstitle}>Spindles</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Spindles Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
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
                    </View>
                </View>
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
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
                    </View>
                </View>
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* end of  Spindles  */}
            {/* Stringers================ */}
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.collapstitle}>Stringers</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.setPadding}>
                    <Text style={Styles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[Styles.flex, { paddingLeft: 5 }]}>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[Styles.flex, Styles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Stringers Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Coats of Paint</Text>
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
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
                    </View>
                </View>
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[Styles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
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
                    </View>
                </View>
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={Styles.flex}>
                        <Text style={Styles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={Styles.setPadding}>
                        <View style={Styles.inputLabel}>
                            <Text style={Styles.labelColor}>Price:</Text>
                            <Text style={Styles.midLabelColor}>Quantity:</Text>
                            <Text style={Styles.txtBold}>Total:</Text>
                        </View>
                        <View style={Styles.flex}>
                            <View>
                                <TextInput
                                    style={Styles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[Styles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* end of Stringers  */}
            {/*=========Add Note============== */}
            <View style={[Styles.bottomTotal, { marginTop: 15 }]}>
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
            <View style={{marginTop: 20}}></View>
        </View>
    );
};

export default Stairs;