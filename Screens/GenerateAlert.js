import React from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { greaterOrEq } from 'react-native-reanimated'


const GenerateAlert = props => {

    return (
        
        <View style={styles.screen}>
         
            <Text>From here you can send notifications to all concerned</Text>
            
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


export default GenerateAlert