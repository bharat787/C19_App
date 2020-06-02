import React from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const LocationHistory = props => {

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