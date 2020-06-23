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
import ForgotPass from './Screens/ForgotPass'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Colors from './constants/colors'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import OneSignal from 'react-native-onesignal'


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

function ForPass({navigation}) {
	return (
		<View style={styles.container}>
				<ForgotPass nav={navigation}/>
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

	//Remove this method to stop OneSignal Debugging 
	OneSignal.setLogLevel(6, 0);
  
	// Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
	OneSignal.init("aa868a29-ea69-43f8-ab84-ea7e0ed97a47", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
	OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
	
	// The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
	//OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);
  
	OneSignal.addEventListener('received', onReceived);
	OneSignal.addEventListener('opened', onOpened);
	OneSignal.addEventListener('ids', onIds);
  
  
	OneSignal.removeEventListener('received', onReceived);
	OneSignal.removeEventListener('opened', onOpened);
	OneSignal.removeEventListener('ids', onIds);
  
  
	const onReceived = (notification) => {
	  console.log("Notification received: ", notification);
	}
  
	const onOpened = (openResult) => {
	  console.log('Message: ', openResult.notification.payload.body);
	  console.log('Data: ', openResult.notification.payload.additionalData);
	  console.log('isActive: ', openResult.notification.isAppInFocus);
	  console.log('openResult: ', openResult);
	}
  
	const onIds = (device) => {
	  console.log('Device info: ', device);
	}
	


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
		  name="ForgotPass" 
		  component={ForPass} 
		  options={{ title: 'Reset Password', headerStyle: { backgroundColor: Colors.BluePrim},
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
