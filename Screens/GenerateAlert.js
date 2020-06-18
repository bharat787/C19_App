import React, {useState} from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Colors from '../constants/colors'
import firebase from '../environment/config'

const GenerateAlert = props => {

	//////////////////////////////////////////

	const [details, setDetails] = useState({});
  	var values = [];

  	function isEmpty(obj) {
    	for (var key in obj) {
      		if (obj.hasOwnProperty(key)) return false;
    	}
    	return true;
 	}

  	var userDetails = firebase.database().ref(firebase.auth().currentUser.uid);
  	var user = firebase.auth().currentUser.uid;

  	const getVisitorData = async () => {
    	let locData = await firebase
      		.database()
      		.ref(`users/${firebase.auth().currentUser.uid}/Visitors/`)
      		.once("value");

    	firebase
      		.database()
      		.ref(`users/${firebase.auth().currentUser.uid}/Visitors/`)
      		.once("value")
      		.then((snapshot) => {
        	setDetails(snapshot.val());
      	});
  	};

	console.log(getVisitorData());
	
	if (isEmpty(details)) {
		console.log("value of  details is NULL ");
	} else {
		console.log("value of details is not null ", details);
		values = Object.values(details);
		console.log("VALUES ", values);
		var newVal = values
		console.log("filtered values", newVal.filter(function(info) {
			return info.VisitorLogs.Date === 10
		}))
	}

		//////////////////////////////////////////
		var date = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear(); //Current 
		var hours = new Date().getHours()

		var [selectDate, setSelectDate]  = useState('date')
		var [selectMonth, setSelectMonth]  = useState('month')
		var [selectYear, setSelectYear]  = useState('year')
		var [selectHour, setSelectHour]  = useState('hours')

		const SearchLogs = () => {
			console.log("search log",selectDate + '/' + selectMonth + '/' + selectYear+ '---' + selectHour)

		}

		const renderData = (vals) => {
			return (
				  <View style={styles.feedItem}>
					<View>
						  <Text style={styles.fontLoc}>{vals.VisitorLogs.name}</Text>
						  <Text style={styles.fontDate}>
							{vals.VisitorLogs.Date +
							  "/" +
							  vals.VisitorLogs.Month +
							  "/" +
							  vals.VisitorLogs.Year}
						  </Text>
							<Text style={styles.fontDate}>{vals.VisitorLogs.mobile}</Text>
					</View>
				  </View>
			);
		  };
		

    return (
		<View style={styles.screen}>
			<View style={styles.flatView}>
				<FlatList data={values} renderItem={({ item }) => renderData(item)}/>
			</View>
			<View style={styles.DateView}>
				<Text style={styles.textin}>DD:</Text>
				<TextInput
				style={styles.inputText}
				placeholder='DD'
				keyboardType='numeric'
				onChangeText={text => setSelectDate(text)}/>

				<Text style={styles.textin}>MM:</Text>
				<TextInput
				style={styles.inputText}
				placeholder='MM'
				keyboardType='numeric'
				onChangeText={text => setSelectMonth(text)}/>

				<Text style={styles.textin}>YYYY:</Text>
				<TextInput
				style={styles.inputText}
				placeholder='YYYY'
				keyboardType='numeric'
				onChangeText={text => setSelectYear(text)}/>

				<Text style={styles.textin}>HRS:</Text>
				<TextInput
				style={styles.inputText}
				placeholder='HRS'
				keyboardType='numeric'
				onChangeText={text => setSelectHour(text)}/>
			</View>

			<View style={styles.buttonView}>
				<TouchableOpacity 
					style={styles.searchButton}
					onPress={() => SearchLogs()}>
					<Text 
					style={styles.btnfont}>Search</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.AlertButton}>
					<Text style={styles.btnfont}>Alert</Text>
				</TouchableOpacity>
			</View>
		</View>
    );
}


const styles = StyleSheet.create ({

	flatView: {
		//flex: 0,
		backgroundColor: 'white',
		marginTop: 140,
		marginBottom: 30,
		marginHorizontal: 20,
		height: 450,
		
		
	},

    screen: {
        flex: 1,
        width: "100%",
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	
	buttons: {
		flex: 0,
		width: "80%",
		height: "15%",
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 20,
		padding: 20,
		backgroundColor: Colors.Blue1,
		fontSize: 20,
		margin: 20

				},

	buttonView: {
		flex: 0,
		width: '100%',
		flexDirection: 'row',
		
		alignSelf: 'center'
		
	},

	AlertButton: {
		
		flex: 0,
		width: "40%",
		height: "25%",
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 20,
		padding: 20,
		backgroundColor: Colors.RedPrim,
		margin: 20,
		alignItems: 'center'
	},

	DateView: {
		flexDirection: 'row',
		justifyContent: 'center'

	},

	textin: {
		padding: 5,
		margin: 5,
		alignItems: 'center'
	},

	inputText: {
		padding: 5,
		margin: 5,
		borderColor: Colors.Purple1,
		borderWidth: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 10,
		alignItems: 'center'
	},

	searchButton: {
		
		flex: 0,
		width: "40%",
		height: "25%",
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 20,
		padding: 20,
		backgroundColor: Colors.Tealbg,
		margin: 20,
		alignItems: 'center'
	},

	btnfont: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	},

	feedItem: {
		backgroundColor: Colors.Blue2,
		borderRadius: 15,
		padding: 8,
		flexDirection: "row",
		marginVertical: 10,
		width: "80%",
		justifyContent: "center",
		alignSelf: "center",
	  },
	
	  fontLoc: {
		fontSize: 24,
		color: "white",
	  },
	
	  fontDate: {
		fontSize: 15,
		color: "white",
	  },

})


export default GenerateAlert
