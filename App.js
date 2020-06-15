import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import HomeUser from './Screens/HomeUser'
import PersonalDetails from './Screens/PersonalDetails';
import ProtectMe from './Screens/ProtectMe'
import LocationHistory from './Screens/LocationHistory'
import HomeStaff from './Screens/HomeStaff'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import RegisterUser from './Screens/RegisterVisitor'
import GenerateAlert from './Screens/GenerateAlert'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Colors from './constants/colors'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const intialState = [
	{Staff: undefined}
]

const reducer = (state = intialState, action) => {
	//Staff: undefined
	switch(action.type){
		case 'PERSONAL_MODE': 
			console.log("PERSONAL REDUX WAS CALLED")
			return action.payload 
		case 'STAFF_MODE': 
			console.log("STAFF REDUX WAS CALLED")
			return action.payload
		case 'LOGOUT_MODE':
			console.log("LOGOUT REDUX PERFORMED")
			return{Staff: undefined}

			
		
	}
	return state

}

const store = createStore(reducer)

function Log({navigation}) {
	return (
		<View style={styles.container}>
			<Provider store = {store}>
				<Login nav={navigation}/>
			</Provider>
		</View>
	)
}

function SignUp({navigation}) {
	return (
		<View style={styles.container}>
			<Signup nav={navigation}/>
		</View>
	)
}

function DashBoard({navigation}) {
	return (
		<View style={styles.container}>
			<Provider store={store}>
				<HomeUser nav={navigation}/>
			</Provider>
		</View>
	)
}

function DashBoardStaff({navigation}) {
	return (
		<View style={styles.container}>
			<Provider store={store}>
				<HomeStaff nav={navigation}/>
			</Provider>
		</View>
	)
}

function PersDetails() {
	return (
		<View style={styles.container}>
			<PersonalDetails/>
		</View>
	)
}

function RegVis() {
	return (
		<View style={styles.container}>
			<RegisterUser/>
		</View>
	)
}

function LocHis() {
	return (
		<View style={styles.container}>
			<LocationHistory/>
		</View>
	)
}

function ProtMe() {
	return (
		<View style={styles.container}>
			<ProtectMe/>
		</View>
	)
}

function GenAlert() {
	return (
		<View style={styles.container}>
			<GenerateAlert/>
		</View>
	)
}

const Stack = createStackNavigator()

export default function App() {

	
	


  return (
    <NavigationContainer>
		<Stack.Navigator initialRouteName="LogIn">
        
		  <Stack.Screen 
		  name="LogIn" 
		  component={Log} 
		  options={{ title: 'Login', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>

		  <Stack.Screen 
		  name="Register" 
		  component={SignUp} 
		  options={{ title: 'Register', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>

		  <Stack.Screen 
		  name="UserHome" 
		  component={DashBoard} 
		  options={{ title: 'DashBoard', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff',
		  headerLeft: null
		  }}/>

		  <Stack.Screen 
		  name="StaffHome" 
		  component={DashBoardStaff} 
		  options={{ title: 'DashBoard', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff',
		  headerLeft: null
		  }}/>

		  <Stack.Screen 
		  name="Register Visitor" 
		  component={RegVis}
		  options={{ title: 'Visitor Details', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>

		  <Stack.Screen 
		  name="Personal Details" 
		  component={PersDetails}
		  options={{ title: 'User Details', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>

		  <Stack.Screen 
		  name="Location History" 
		  component={LocHis}
		  options={{ title: 'Places Visited', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>

		  <Stack.Screen 
		  name="Protect Me" 
		  component={ProtMe}
		  options={{ title: 'Protect Me', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>

		  <Stack.Screen 
		  name="Generate Alert" 
		  component={GenAlert}
		  options={{ title: 'Generate Alert', headerStyle: { backgroundColor: Colors.BluePrim},
		  headerTitleAlign: 'center',
		  headerTintColor: '#fff'}}/>
        
		</Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logout: {
	  backgroundColor: Colors.BluePrim,
	  marginLeft: 20
  },

  text: {
	  color: 'white',
	  fontSize: 14,
	  fontWeight: 'bold'
  }
});
