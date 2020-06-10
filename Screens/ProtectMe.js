import React, { useState } from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import Cards from '../components/Cards'
import Input from '../components/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context'
import firebase from '../environment/config'


const ProtectMe = props => {

    const [location, setLocation] = useState('')

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours

    const pushLocation = () => {

        var tempDetails = {
            'Location': location,
            'Date': date,
            'Month': month,
            'Year': year,
            'hours': hours
        }
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/Locations/').push({
            LocationDetails: tempDetails

        
        })
        console.log("see if updated")
        setLocation('')
    }


    return (
        
        <KeyboardAwareScrollView style={styles.screenKeyboard}>
         
            <Cards style={styles.cards}>
            <Text style={styles.textLine}>Start the bluetooth service to identify all devices within 3ft</Text>
            <Input 
            style={styles.TextIn}
            placeholder="Current Location"
            placeholderTextColor={Colors.YellowAccent}
            onChangeText={text => setLocation(text)}/>
            </Cards>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => pushLocation()}>
                    <Text style={styles.font}>Start</Text>
            </TouchableOpacity>
            
        </KeyboardAwareScrollView>

    )
}

const styles = StyleSheet.create ({

    TextIn: {
        flex: 1,
        marginTop: 100,
        marginBottom: 15,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },

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
        height: '30%',
        width: '80%',
        marginTop: 50,
        marginBottom: 200,
        alignSelf: 'center',
        backgroundColor: 'steelblue',
        alignContent: 'center',
        justifyContent: 'center'
    },

    screenKeyboard: {
        flex: 0,
        width: "100%",
        
        
    }
})


export default ProtectMe
