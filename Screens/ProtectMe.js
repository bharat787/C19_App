import React, { useState, useStream } from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent, Alert, Vibration } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import Cards from '../components/Cards'
import Input from '../components/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context'
import firebase from '../environment/config'
import { BleManager, BleError } from 'react-native-ble-plx'
import xs, {Stream} from 'xstream'
import xsFromCallback from 'xstream-from-callback'
import { scan } from 'react-native-ble-manager'
//import BleManager from 'react-native-ble-manager'


const ProtectMe = props => {

    const [location, setLocation] = useState('')
    const [disabled, setDisabled] = useState(false)

    const blemanager = new BleManager()
    //var xs = require('xstream').default

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours

    const startScan = () => {
        console.log("IN STARTSCAN")
        const subscription = blemanager.onStateChange((state) => {
            //console.log("current state: ",state)
            if (state === 'PoweredOn') {
                scan()
                console.log("BT POWERED ON")
                subscription.remove()
            }
        }, true)
    }

    const scan = () => {
        blemanager.startDeviceScan(null, null, (error, device) => {
            console.log('SCANNING...')
            changeStatus("SCAN")

            if (error) {
                console.log("ERROR OCCURANCE",error)
            }
            if(device !== null){
                addBLE(device)
            }
        })
    }

    const changeStatus = (stat) => {
        console.log("STATUS CHANGE", stat)
    }

    const addBLE = (device) => {
        console.log("NEW DEVICE!!!", device.id, device.rssi, device.name)
        var distance = Math.pow(10, (-77-(device.rssi)/20))
        console.log("DISTANCE", distance)
        if (distance < 1.5) {
            Vibration.vibrate(1000)
        }

    }

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
        setDisabled(true)
        startScan()
        

    }

    const BTstop = () => {
        blemanager.stopDeviceScan()
        setDisabled(false)
        console.log('STOPPED BT')
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
            <View style={styles.buttonView}>
            <TouchableOpacity 
            style={!disabled ? styles.button: styles.disabledBtn}
            disabled={disabled}
            onPress={() => pushLocation()}>
                    <Text style={!disabled ? styles.font: styles.fontDisabled}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={disabled ? styles.buttonStop: styles.disabledBtn}
            disabled={!disabled}
            onPress={() => BTstop()}>
                    <Text style={disabled ? styles.fontStop : styles.fontDisabled}>Stop</Text>
            </TouchableOpacity>
            </View>
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

    fontStop: {
        color: Colors.RedPrim,
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
        marginBottom: 25,
        margin: 10

        },

    buttonStop:{
        flex: 0,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: Colors.RedPrim,
        borderWidth: 2,
        borderRadius: 50,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        margin: 10
    
            },

    cards: {
        
        flex: 1,
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
        
        
    },

    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    disabledBtn: {
        flex: 0,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: '#888888',
        borderWidth: 2,
        borderRadius: 50,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        margin: 10
    },

    fontDisabled: {
        color: '#888888',
        fontSize: 30,
        fontWeight: 'normal',
        alignSelf: 'center',
        alignContent: 'center'
    }
})


export default ProtectMe
