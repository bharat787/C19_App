import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeUser from './Screens/HomeUser'
import PersonalDetails from './Screens/PersonalDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <PersonalDetails/>
    </View>
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
