import React from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import Cards from '../components/Cards'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context'


const ProtectMe = props => {

    return (
        
        <View style={styles.screen}>
         
            <Cards style={styles.cards}>
            <Text style={styles.textLine}>Start the bluetooth service to identify all devices within 3ft</Text>
            </Cards>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.font}>Start</Text>
            </TouchableOpacity>
            
        </View>

    )
}

const styles = StyleSheet.create ({

    

    screen: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        
    },
    font: {
        color: Colors.Blue2,
        fontSize: 30,
        fontWeight: 'normal',
        alignSelf: 'center',
        alignContent: 'center'
        
    },

    textLine: {
        flex: 1, 
        color: 'white',
        fontSize: 20,
        fontWeight: 'normal',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center'
        
    },

    button:{
        flex: 0,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: Colors.Blue2,
        borderWidth: 2,
        borderRadius: 50,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250

        },

    cards: {
        
        flex: 0,
        height: '15%',
        width: '80%',
        marginTop: 50,
        marginBottom: 200,
        alignSelf: 'center',
        backgroundColor: 'steelblue',
        alignContent: 'center',
        justifyContent: 'center'
    }
})


export default ProtectMe