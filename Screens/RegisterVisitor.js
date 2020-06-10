import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../constants/colors'
import Header from '../components/Header'
import Input from '../components/Input'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from '../environment/config'


const RegisterUser = props => {

    const [fullName, setFullName] = useState('')
    const [mobileNum, setMobileNum] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [visitordetails, setVisitorDetails] = useState({})

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours


    const pushVisitor = () => {
        var tempDetails = {'name': fullName, 
        'mobile': mobileNum, 
        'email': email, 
        'location': location,
        'Date': date,
        'Month': month,
        'Year': year,
        'hours': hours}
        setVisitorDetails(tempDetails)
        console.log(tempDetails)

        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/Visitors/').push({
            VisitorLogs: tempDetails
        })
        console.log("see if it got updated")

        setFullName('')
        setMobileNum('')
        setEmail('')
        setLocation('')
        console.log("see if it got updated")

    }
    

    return (
        
        <KeyboardAwareScrollView style={styles.screen}>
            <View>
            
                
                <Input style={styles.TextIn} 
                placeholder="Full Name" 
                placeholderTextColor={Colors.YellowAccent}
                onChangeText={text => setFullName(text)}/>

                <Input style={styles.TextIn2} 
                placeholder="Mobile Number" 
                placeholderTextColor={Colors.YellowAccent}
                onChangeText={text => setMobileNum(text)}/>
                
                <Input style={styles.TextIn3} 
                placeholder="Email ID" 
                placeholderTextColor={Colors.YellowAccent}
                onChangeText={text => setEmail(text)}/>

                <Input style={styles.TextIn3} 
                placeholder="Location" 
                placeholderTextColor={Colors.YellowAccent}
                onChangeText={text => setLocation(text)}/>            

                <TouchableOpacity 
                style={styles.button}
                onPress={() => pushVisitor()}>
                    <Text style={styles.font}>Register</Text>
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

export default RegisterUser
