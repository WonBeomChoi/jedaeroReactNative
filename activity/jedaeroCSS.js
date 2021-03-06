import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { normalize } from 'react-native-elements';

let stackNavigationOptions = {
    mode: 'card',
    headerMode:'float',
    headerLayoutPreset: 'center',
    navigationOptions : ({navigation}) => {
        return {
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor:'#344955'
            },
            headerTitleStyle: {
                fontSize:normalize(24)
            },
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                >
                    <EvilIcon 
                        name="navicon" 
                        size={normalize(30)} 
                        color="#ffffff"
                        style={{marginRight:normalize(8)}}
                    />
                </TouchableOpacity>
            )
        } 
    }
}

let jedaeroStyles = StyleSheet.create({

})

export { stackNavigationOptions, jedaeroStyles }