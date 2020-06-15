import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  TextComponent,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import Colors from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../environment/config";

const LocationHistory = (props) => {
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

  const getLocationData = async () => {
    let locData = await firebase
      .database()
      .ref(`users/${firebase.auth().currentUser.uid}/Locations/`)
      .once("value");

    firebase
      .database()
      .ref(`users/${firebase.auth().currentUser.uid}/Locations/`)
      .once("value")
      .then((snapshot) => {
        setDetails(snapshot.val());
      });
  };

  console.log(getLocationData());
  if (isEmpty(details)) {
    console.log("value of  details is NULL ");
  } else {
    console.log("value of details is not null ", details);
    values = Object.values(details);
    console.log("VALUES ", values);
  }

  const renderData = (vals) => {
    return (
      <View style={styles.feedItem}>
        <View>
          <Text style={styles.fontLoc}>{vals.LocationDetails.Location}</Text>
          <Text style={styles.fontDate}>
            {vals.LocationDetails.Date +
              "/" +
              vals.LocationDetails.Month +
              "/" +
              vals.LocationDetails.Year}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={values} renderItem={({ item }) => renderData(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
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
    fontSize: 10,
    color: "white",
  },
});

export default LocationHistory;
