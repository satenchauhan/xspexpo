import React from 'react';
import { Text, View,TextInput} from 'react-native';
import {IconButton,Checkbox} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Styles }  from '../assets/Items/EstimatorStyle';
import { FtPlacehoder,PerSqftPlacehoder } from './Placeholder';



const WallInput = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            {/* Use this area dimensions */}
            <View style={{ marginTop: 10 }}>
                <Text style={Styles.optionTitle}>Use this area dimensions</Text>
                <View style={[Styles.flex, { paddingLeft: 5 }]}>
                    <View style={Styles.flex}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text>Yes</Text>
                    </View>
                    <View style={[Styles.flex, { marginRight: 100 }]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text>No</Text>
                    </View>
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
                <View style={Styles.l_w_h_container}>
                    <View>
                        <View style={Styles.l_w_h_box}>
                            <Text style={[Styles.inputLabel, { fontWeight: 'bold' }]}>Total Area:</Text>
                            <TextInput
                                style={Styles.L_W_H_Input}
                                name={'length'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <FtPlacehoder />
                        </View>
                    </View>
                </View>
            </View>
            {/* Include Paint Cost */}
            <View style={{ marginTop: 5 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Include Paint Cost?</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={Styles.includeCost}>
                    <View style={Styles.selectBox}>
                        <Text style={Styles.select}>Select Paint Finish </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => console.log('pressed')} />
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
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => console.log('pressed')} />
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
            {/* Coats of Paint===================================== */}
            <View style={{ marginTop: 15 }}>
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
            {/* Primer Required======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Primer Required</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
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
            {/* Any Repairs Required======================== */}
            <View style={{ marginTop: 15, marginBottom: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Any Repairs Required</Text>
                </View>
                <View style={[Styles.setPadding, { marginTop: 2 }]}>
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
    );
}

export default WallInput;


