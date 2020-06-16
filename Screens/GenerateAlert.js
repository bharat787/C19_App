import React, {useState} from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent, FlatList } from 'react-native'
import Colors from '../constants/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
//import firebase from '../environment/config'

const GenerateAlert = props => {

    const [details, setDetails] = useState({});
    var values = [];
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
	  setDate(currentDate);
	  console.log(currentDate)
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode("date");
    };

    const showTimepicker = () => {
      showMode("time");
    };

    function isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }

    
    return (
		<View style={styles.screen}>
				<View style={styles.flatView}>
					<FlatList />
				</View>
				<View >
					<View>
						<TouchableOpacity
						style = {styles.buttons} 
						onPress={showDatepicker}>
							<Text>Pick a Date</Text>
						</TouchableOpacity>
					
						<TouchableOpacity 
						style = {styles.buttons} 
						onPress={showTimepicker}>
							<Text>Pick a Time</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.AlertButton}>
							<Text>Send Alert Notification</Text>
						</TouchableOpacity>
					</View>
						{show && (
							<DateTimePicker
								testID="dateTimePicker"
								value={date}
								mode={mode}
								is24Hour={true}
								display="default"
								onChange={onChange}
													/>
						)}
				</View>
				
								
		</View>
    );
}

const styles = StyleSheet.create ({

	flatView: {
		flex: 0,
		backgroundColor: Colors.Blue1,
		marginTop: 140,
		marginBottom: 30,
		marginHorizontal: 20,
		height: 450
	},

    screen: {
        flex: 1,
        width: "100%",
		justifyContent: 'center',
		backgroundColor: Colors.TealText
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
		width: '70%',
		flexDirection: 'row',
		
		alignSelf: 'center'
		
	},

	AlertButton: {
		
		flex: 0,
		width: "80%",
		height: "25%",
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 20,
		padding: 20,
		backgroundColor: Colors.RedPrim,
		fontSize: 20,
		margin: 20
	}

})


export default GenerateAlert
