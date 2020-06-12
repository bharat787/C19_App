import React , {useState, useReducer} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import Colors from '../constants/colors'
import firebase from '../environment/config'
import {connect} from 'react-redux'

function mapStateToProps(state){

	// const { personal } = state

	// return {
	// 	personal,
	// }

	return {
		Staff:state.Staff
	}

}

function mapDispatchToProps(dispatch){
	return {
		setPersonalMode : () => dispatch({type:'PERSONAL_MODE', payload: 'personal'}),
		setStaffMode : () => dispatch({type:'STAFF_MODE', payload: istaff}),
		setLogoutMode : () => dispatch({type: "LOGOUT_MODE", payload: undefined})
	}

}

const Login = props => {
	const [id, setId] = useState('')
	const [password, setPassword ] = useState('')
	const [details, setDetails] = useState({})
  
	const userLogin = () => {
    	if(id === '' && password === '') {
		
			Alert.alert('Enter details to sign in!')

    	}else {
			// props.setPersonalMode()
			// console.log(props.Staff);
			// props.setPersonalMode()
			// console.log("second render",props.Staff)
			
			firebase
			.auth()
			.signInWithEmailAndPassword(id, password)
			.then((res) => {
				console.log("this is the res value",res)
				console.log('User logged in successfully!')
				//setId('')
				//setPassword('')
				firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', function(snapshot){
					console.log(snapshot.val())

				if((snapshot.val()).StaffMem === true){
					props.setStaffMode()
					props.setStaffMode()

					console.log(props.Staff)
					console.log("user is a staff")

				
					//props.setLogoutMode()
				} else {
					props.setPersonalMode()
					props.setPersonalMode()

					console.log(props.Staff)
					console.log("user is personal")
					//props.setLogoutMode()

			 		}
			 	})
			})
    
		}
    }


return (
    <View style={styles.container}>
    <Text style={styles.logo}>C19</Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor= {Colors.PlaceholderTextColor}
        onChangeText={text => setId(text)}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        onChangeText={text => setPassword(text)}/>

       </View>
       <TouchableOpacity style={styles.loginBtn}
       onPress={() => userLogin()}>
         <Text style={styles.loginText}>LOGIN</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.loginBtn}>
         <Text style={styles.forgot}>Forgot Password?</Text>
       </TouchableOpacity>
       
       <TouchableOpacity 
       onPress={() => props.nav.navigate('Register')}
       style={styles.loginBtn}>
         <Text style={styles.loginText}>Signup</Text>
       </TouchableOpacity>
       
		
  
      </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Tealbg,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },

    logo:{
        fontWeight:"bold",
        fontSize:50,
        color: Colors.TealTranslucent,
        marginBottom:40
      },

      inputView:{
        width:"80%",
        backgroundColor:Colors.TealTranslucent,
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },

      inputText:{
        height:50,
        color: Colors.PlaceholderTextColor
      },

      forgot:{
        color:"white",
        fontSize:14
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white",
        fontSize:14
	  },
	  
	  
  })

export default connect(mapStateToProps, mapDispatchToProps)(Login)
