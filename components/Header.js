import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const Header = props => {
    return (
        <View style={{...styles.header, ...props.style}}>
            <Text style={{...styles.headerTitle, ...props.style}}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        paddingTop: 50,
        backgroundColor: Colors.BluePrim,
        alignContent: 'center',
        justifyContent: "center",
        
    },

    headerTitle: {
        color: 'black',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: ''
    },

    
})

export default Header