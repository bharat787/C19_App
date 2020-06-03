import React from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const HomeStaff = props => {

    return (
        
        <View style={styles.screen}>
           
                
                <TouchableOpacity 
                style={styles.button}
                onPress={() => props.nav.navigate('Register User')}>
                    <Text style={styles.font}>Register User</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button2} 
                onPress={() => props.nav.navigate('Generate Alert')}>
                    <Text style={styles.font}>Generate Alert</Text>
                </TouchableOpacity>
                
            
        </View>

    )
}

const styles = StyleSheet.create ({

    button: {
        
        flex: 1,
        height: "20%",
        width: "80%",
        borderRadius: 20,
        marginTop: 70,
        marginBottom: 20,
        padding: 10,
        backgroundColor: Colors.Blue1,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'
    },

    button2: {
        
        flex: 1,
        height: "20%",
        width: "80%",
        borderRadius: 20,
        marginVertical: 20,
        padding: 10,
        backgroundColor: Colors.Blue2,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'
    },

    button3: {
        
        flex: 1,
        height: "20%",
        width: "80%",
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 70,
        padding: 10,
        backgroundColor: Colors.Blue3,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'
        
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 100,
        flex: 1,
        width: "130%",
        marginVertical: 100
    },

    screen: {
        flex: 1,
        width: "100%",
        justifyContent: 'center'
    },

    font: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },

    TopHeader: {
        backgroundColor: Colors.BluePrim
    }

})


export default HomeStaff