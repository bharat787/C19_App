import React from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'


const HomeUser = props => {

    return (
        
        <View style={styles.screen}>
            <Header title="DashBoard" style={styles.TopHeader}/>
            
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.font}>Protect Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.font}>Location History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button3}>
                    <Text style={styles.font}>Personal Details</Text>
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


export default HomeUser