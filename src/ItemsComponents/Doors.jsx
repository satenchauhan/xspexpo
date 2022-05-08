import React,{useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import {Title,IconButton,Checkbox} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles }  from '../assets/Items/EstimatorStyle';
import { PanelStyle } from '../assets/Items/PanelStyle';
// import { FtPlacehoder, SqftPlacehoder,LastTotalPlacehoder } from './Placeholder';

const Doors=(props)=>{
    const [checked, setChecked] = useState(false);
    const [showHide, setShowHide] = useState(false);
    return (
        <View>
            {/* Door Style */}
            <View style={{ marginTop: 10 }}>
                <Text style={Styles.optionTitle}>Door Style(select all that apply)</Text>
                <View style={[PanelStyle.iconsFlex, { paddingLeft: 2, paddingRight: 2 }]}>
                    <View style={PanelStyle.Box}>
                        <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../assets/Images/bi-fold-door.png')} />
                        <Text style={PanelStyle.IconTitle}>Bi-Fold Door</Text>
                    </View>
                    <View style={PanelStyle.Box}>
                        <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../assets/Images/flat-door.png')} />
                        <Text style={PanelStyle.IconTitle}>Flat Door</Text>
                    </View>
                    <View style={PanelStyle.Box}>
                        <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../assets/Images/french-door.png')} />
                        <Text style={PanelStyle.IconTitle}>French Door</Text>
                    </View>
                    <View style={PanelStyle.Box}>
                        <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../assets/Images/paneled-door.png')} />
                        <Text style={[PanelStyle.IconTitle, { textAlign: 'center' }]}>Paneled Door</Text>
                    </View>
                </View>
            </View>
            {/* Flat Door===================================== */}
            <View style={{ marginTop: 15 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Flat Door</Text>
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
                                style={Styles.OnlyInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            {/* <SqftPlacehoder />   */}
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
            {/* Paneled Door======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Paneled Door</Text>
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
            {/* French Door======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>French Door</Text>
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
                            {/* <SqftPlacehoder />      */}
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
                                style={[Styles.totalInpt]}
                                name={'total'}
                                placeholder={"$0.00"}
                                placeholderTextColor={"black"}
                            />
                        </View>
                    </View>
                </View>
            </View>
            {/* Bi-Fold-Door======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Bi-Fold-Door</Text>
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
                            {/* <SqftPlacehoder />      */}
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
            <View style={{ marginTop: 10 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Repairs Required </Text>
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
            <View style={{ marginTop: 15 }}>
                <View style={Styles.flex}>
                    <Text style={Styles.title}>Include Paint Cost?</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                {checked === false ? (
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
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => console.log('Pressed')} />
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
                ):null}
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
                <View style={{marginTop: 20}}></View>
            </View>
        </View>
    )
}

export default Doors;