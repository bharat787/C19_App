import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import Header from '../components/Header'
import Input from '../components/Input'

const PersonalDetails = props => {
    return (
        
        <View style={styles.screen}>
            <Header title="Personal Details" style={styles.TopHeader}/>
            
                
                <Input style={styles.TextIn} 
                placeholder="Full Name" 
                placeholderTextColor={Colors.YellowAccent}/>

                <Input style={styles.TextIn2} 
                placeholder="Mobile Number" 
                placeholderTextColor={Colors.YellowAccent}/>
                
                <Input style={styles.TextIn3} 
                placeholder="Email ID" 
                placeholderTextColor={Colors.YellowAccent}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.font}>Save</Text>
                </TouchableOpacity>

            
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        
    },

    TopHeader: {
        backgroundColor: Colors.RedPrim
    },

    TextIn: {
        flex: 1,
        marginTop: 100,
        marginBottom: 5,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold"

    },

    TextIn2: {
        flex: 1,
        marginVertical: 5,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold"

    },

    TextIn3: {
        flex: 1,
        marginTop: 5,
        marginBottom: 50,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold"

    },
    font: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    button:{
        flex: 1,
        alignSelf: 'center',
        backgroundColor: Colors.RedPrim,
        borderRadius: 50,
        height: "20%",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250

        }
    
})

export default PersonalDetails