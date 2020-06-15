import React, {useState} from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, TextComponent } from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { greaterOrEq } from 'react-native-reanimated'
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../environment/config'

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

    // var userDetails = firebase.database().ref(firebase.auth().currentUser.uid);
    // var user = firebase.auth().currentUser.uid;

    // const getLocationData = async () => {
    //   let locData = await firebase
    //     .database()
    //     .ref(`users/${firebase.auth().currentUser.uid}/Visitors/`)
    //     .once("value");

    //   firebase
    //     .database()
    //     .ref(`users/${firebase.auth().currentUser.uid}/Visitors/`)
    //     .once("value")
    //     .then((snapshot) => {
    //       setDetails(snapshot.val());
    //     });
    // };

    // console.log(getLocationData());
    // if (isEmpty(details)) {
    //   console.log("value of  details is NULL ");
    // } else {
    //   console.log("value of details is not null ", details);
    //   values = Object.values(details);
    //   console.log("VALUES ", values);
    // }


    return (
      <View style={styles.screen}>
        <View>
        	<View>
            	<Button onPress={showDatepicker} title="Pick Date" />
        	</View>
        	<View>
            	<Button onPress={showTimepicker} title="Pick Time" />
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

    

    screen: {
        flex: 1,
        width: "100%",
        justifyContent: 'center'
    }

})


export default GenerateAlert
