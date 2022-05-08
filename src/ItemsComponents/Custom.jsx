import React from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, Image } from 'react-native';
import { Title } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Styles } from '../assets/Items/EstimatorStyle';
import { PerHrPlacehoder } from './Placeholder';


const Custom = (props) => {
    const [checked, setChecked] = React.useState(false);
   
    return (
        <View>
            {/* Item Name========= */}
            <View style={{ marginTop: 10 }}>
                <Text>{''}</Text>
                <View style={Styles.inptFlex}>
                    <TextInput
                        style={{ padding: 3, borderColor: 'gray', borderRadius: 5, width: '100%' }}
                        name={'height'}
                        placeholder={'Item Name'}
                        placeholderTextColor="black"
                    />
                    <View style={Styles.line}></View>
                </View>
            </View>
            {/* Quantity =============== */}
            <View>
                <View style={[Styles.lwhSection, { marginBottom: 15 }]}>
                    <View>
                        <View style={Styles.selectCutom}>
                            <Picker style={{ height: 25, width: 125 }}>
                                {/* <Picker.Item label="Select Option" value="" /> */}
                                <Picker.Item label="Time" value="time" />
                                <Picker.Item label="Quantity" value="quantity" />
                            </Picker>
                        </View>
                    </View>
                    <View>
                        <View style={Styles.selectCutom}>
                            <Picker style={{ height: 25, width: 125 }}>
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
                </View>
                <View style={Styles.line}></View>
            </View>
            {/* Rate =============== */}
            <View style={{ marginTop: -15 }}>
                <View style={Styles.lwhSection}>
                    <View>
                        <Text style={{ color: 'black' }}>Rate</Text>
                    </View>
                    <View>
                        <Text style={Styles.inputLabel}>{' '}</Text>
                        <View style={Styles.inptFlex}>
                            <TextInput
                                style={[Styles.L_W_H_Input, { width: 100 }]}
                                name={'length'}
                                placeholder={'$0000.0'}
                                placeholderTextColor="black"
                            />
                            <PerHrPlacehoder />
                            <Text>{' '}</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.line}></View>
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
            <View style={{marginTop:20}}></View>
        </View>
    )
}

export default Custom;