import React from 'react';
import {FAB, Portal, Provider, Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const EstimatorFloatButtons = (props) => {
    const navigation = useNavigation();
    const [state, setState] = React.useState({ open: open });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    return (
        <Provider>
        <Portal>
          <FAB.Group
            fabStyle={{backgroundColor:"#051E75"}}
            style={{marginBottom:-12}}
            open={open}
            icon={open ? 'close' : 'plus'}
            color='white'
            actions={[
                {
                  icon: (props) => <MaterialIcons {...props} name="edit" />,
                  label: 'Add Room',
                  color:'#fff',
                  onPress: () => {navigation.navigate('AddRoom')},
                  style: {backgroundColor:'#686de0'}
                }, 
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    );
}

export {EstimatorFloatButtons};