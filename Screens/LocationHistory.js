import React, {useState} from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from '../environment/config'


const LocationHistory = props => {

    const [details, setDetails] = useState({})
    
    var userDetails = firebase.database().ref(firebase.auth().currentUser.uid)
    var user = firebase.auth().currentUser.uid

    firebase.database().ref(`users/${firebase.auth().currentUser.uid}/Locations`).once('value', function (snapshot) {
        setDetails(snapshot.val())
    });
    console.log("im here")
    console.log('see if obj comes after')
    console.log(details)

    return (
        
        <View style={styles.screen}>
         
            <Text>Here you will find all places you've logged in.</Text>
            
        </View>

    )
}

const styles = StyleSheet.create ({

    

    screen: {
        flex: 1,
        width: "100%",
        justifyContent: 'center'
    }

})


export default LocationHistory
