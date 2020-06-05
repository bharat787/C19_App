import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeUser from './Screens/HomeUser'
import PersonalDetails from './Screens/PersonalDetails';
import ProtectMe from './Screens/ProtectMe'
import LocationHistory from './Screens/LocationHistory'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Colors from './constants/colors'



function DashBoard({navigation}) {
	return (
		<View style={styles.container}>
			<HomeUser nav={navigation}/>
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

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
		<Stack.Navigator initialRouteName="UserHome">
        
		  <Stack.Screen 
		  name="UserHome" 
		  component={DashBoard} 
		  options={{ title: 'DashBoard', headerStyle: { backgroundColor: Colors.BluePrim},
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
});
