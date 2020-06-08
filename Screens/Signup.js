import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, CheckBox,  Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../constants/colors'
import Header from '../components/Header'
import Input from '../components/Input'
import firebase from '../environment/config'

const Signup = props => {

    const [isStaff, setStaff] = useState(false);
    const [isPersonal, setPersonal] = useState(false);
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [Email, setEmail] = useState('')
    const [MobileNum, setMobileNum] = useState('')
    const [Password, setPassword] = useState('')
    
    const registerUser = () => {
            if(Fname === '' && Email === '' && Password === '') {
                Alert.alert('Enter details to signup!')
            } else {
                firebase
                .auth()
                .createUserWithEmailAndPassword(Email, Password)
                .then((res) => {
                    firebase.database().ref('users/'+ res.user.uid).set({
                        displayName: Fname,
                        email: Email,
                        StaffMem: isStaff,
                        PersonalMem: isPersonal,
                        phoneNumber: MobileNum
                    })

                    console.log("User registered successfully")
                    setEmail('')
                    setFname('')
                    setLname('')
                    setMobileNum('')
                    setPassword('')
                    setPersonal(false)
                    setStaff(false)
                })
            
            }
            props.nav.navigate('LogIn')
        }


    return (
        
        <KeyboardAwareScrollView style={styles.screen}>
            <View>
            
                
                <Input style={styles.TextIn} 
                placeholder="First Name" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setFname(text)}
                onValueChange={console.log(Fname)}/>
                
                <Input style={styles.TextIn2} 
                placeholder="Last Name" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setLname(text)}/>

                <Input style={styles.TextIn2} 
                placeholder="Mobile Number" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setMobileNum(text)}/>
                
                <Input style={styles.TextIn3} 
                placeholder="Email ID" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setEmail(text)}/>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isStaff}
                    onValueChange={setStaff}
                    style={styles.checkbox}
                    disabled={isPersonal}
                    />
                     <Text style={styles.label}>Staff</Text>

                    <CheckBox
                    value={isPersonal}
                    onValueChange={setPersonal}
                    style={styles.checkbox}
                    disabled={isStaff}
                    />
                    <Text style={styles.label}>Personal</Text>
                </View>

                <Input style={styles.TextIn3} 
                placeholder="Password" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setPassword(text)}/>            

                <TouchableOpacity 
                style={styles.button}
                onPress={() => registerUser()}>
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
        color: Colors.TealTranslucent,
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    button:{
        flex: 0,
        alignSelf: 'center',
        backgroundColor: Colors.Tealbg,
        borderColor: Colors.TealTranslucent1,
        borderWidth: 2,
        borderRadius: 50,
        height: "7%",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250

    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignSelf: 'center'
    },

        checkbox: {
        alignSelf: "center",
    },

    label: {
        margin: 20,
        color: Colors.TealText,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})

export default Signup
