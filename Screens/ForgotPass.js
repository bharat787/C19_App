import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, CheckBox,  Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../constants/colors'
import Header from '../components/Header'
import Input from '../components/Input'
import firebase from '../environment/config'

const ForgotPass = props => {

    const [Email, setEmail] = useState('')
    
    const forgotPassword = (Email) => {
        console.log(Email.Email)
        firebase.auth().sendPasswordResetEmail(Email.Email)
          .then(function (user) {
            alert('Please check your email...')
          }).catch(function (e) {
            console.log(e)
          })

          props.nav.navigate('LogIn')
      }


    return (
        
        <KeyboardAwareScrollView style={styles.screen}>
            <View>
            
                
                
                <Input style={styles.TextIn} 
                placeholder="Email ID" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setEmail(text)}/>
            

                <TouchableOpacity 
                style={styles.button}
                onPress={() => forgotPassword({Email})}>
                    <Text style={styles.font}>Reset</Text>
                </TouchableOpacity>
                </View>
            
        </KeyboardAwareScrollView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 0,
        width: "100%",
        backgroundColor: Colors.TealTranslucent1
        
        
    },

    TopHeader: {
        backgroundColor: Colors.Blue2
    },

    TextIn: {
        flex: 1,
        marginTop: 100,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },


    font: {
        color: 'white',
        fontSize: 25,
        //fontWeight: 'bold',
        
    },

    button:{
        width:"40%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        alignSelf: 'center'

    },

        
})

export default ForgotPass