import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../constants/colors'
import Header from '../components/Header'
import Input from '../components/Input'
import firebase from '../environment/config'

const PersonalDetails = props => {

    const [name, setName] = useState('')
    
    const [details, setDetails] = useState({})
    
    var userDetails = firebase.database().ref(firebase.auth().currentUser.uid)
    var user = firebase.auth().currentUser.uid
   
    
    // userDetails.once('value').then(function(snapshot) {
    //     var key = snapshot.key
    //     console.log(snapshot.child("https://ps-c19.firebaseio.com" + '/users/' + user  + `/phoneNumber`).key)
    // })
    
    

    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', function (snapshot) {
        setDetails(snapshot.val())
    });
    console.log("im here")
    console.log('see if obj comes after')
    //console.log(details.phoneNumber)
    // firebase.database().ref(`Users/${firebase.auth().currentUser.uid}`).once('value', function (snapshot) {
    //     console.log(snapshot.val())
    // });
   // console.log("https://ps-c19.firebaseio.com" + '/users/' + user  + `/email`)
    //console.log(name)
    //console.log(key)

    return (
        
        <KeyboardAwareScrollView style={styles.screen}>
            <View>
            
                
                <Input style={styles.TextIn} 
                placeholder= {details.displayName}
                placeholderTextColor={Colors.YellowAccent}/>

                <Input style={styles.TextIn2} 
                placeholder={details.phoneNumber}
                placeholderTextColor={Colors.YellowAccent}/>
                
                <Input style={styles.TextIn3} 
                placeholder={details.email}
                placeholderTextColor={Colors.YellowAccent}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.font}>Save</Text>
                </TouchableOpacity>
                </View>
            
        </KeyboardAwareScrollView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 0,
        width: "100%",
        
        
    },

    TopHeader: {
        backgroundColor: Colors.Blue2
    },

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

    TextIn2: {
        flex: 1,
        marginVertical: 15,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },

    TextIn3: {
        flex: 1,
        marginTop: 15,
        marginBottom: 50,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },
    font: {
        color: Colors.Blue2,
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    button:{
        flex: 0,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: Colors.Blue2,
        borderWidth: 2,
        borderRadius: 50,
        height: "7%",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250

        }
    
})

export default PersonalDetails
