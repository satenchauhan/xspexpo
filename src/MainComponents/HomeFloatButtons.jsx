import React from 'react';
import {FAB, Portal, Provider, Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeFloatButtons= (props) => {
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
                    icon: (props) => <MaterialIcons {...props} name="group"  />,
                    label:'Clients',
                    color:'#fff',
                    onPress: () => {navigation.navigate('ClientsScreen')},
                    style: {backgroundColor:'#FFD966'}
                  },
                  {
                    icon: (props) => <MaterialIcons {...props} name="file-copy" />,
                    label: 'Invoices',
                    color:'#fff',
                    onPress: () => {navigation.navigate('InvoicesScreen')},
                    style: {backgroundColor:'#686de0'}
                  },
                  {
                    icon: (props) => <MaterialIcons {...props} name="work" />,
                    label: 'Jobs',
                    color:'#fff',
                    onPress: () => {navigation.navigate('JobsScreen')},
                    style: {backgroundColor:'#6FA8DC'}
                  },
                  {
                    icon: (props) => <MaterialIcons {...props} name="calculate" />,
                    label: 'Estimates',
                    color:'#fff',
                    onPress: () => {navigation.navigate('EstimatesScreen')},
                    style: {backgroundColor:'#93C47D'}
                  },
                  {
                    icon: (props) => <MaterialIcons {...props} name="request-page" />,
                    label: 'Requests',
                    color:'#fff',
                    onPress: () => {navigation.navigate('RequestsScreen')},
                    style: {backgroundColor:'#E06666'}
                  },
                  {
                    icon: (props) => <MaterialIcons {...props} name="note-add" />,
                    label: 'Notes',
                    color:'#fff',
                    onPress: () => {navigation.navigate('NoteScreen')},
                    style: {backgroundColor:'#FF9D47'}
                  },
                  {
                    icon: (props) => <MaterialIcons {...props} name="money"/>,
                    label: 'Expenses',
                    color:'#fff',
                    onPress: () => {navigation.navigate('ExpensesScreen')},
                    style:{backgroundColor:'#37B8B4'}
                  },
                  {
                    label: 'Tasks',
                    icon: (props) => <MaterialIcons {...props} name="list"/>,
                    color:'#fff',
                    onPress: () => {navigation.navigate('TaskScreen')},
                    style:{backgroundColor:'#DB74DB'}
                  },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                  
                    
                }
              }}
            />
          </Portal>
        </Provider>
      );
  };


  export {HomeFloatButtons};

  