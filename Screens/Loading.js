import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text} from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }
})