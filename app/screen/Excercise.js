import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Excercise = () => {
    return (
        <>
            <Header title="Exercises" />
            <SearchBar/>
            <View style={styles.container}>
                <Text>Excercise</Text>
            </View>
        </>

    )
}

export default Excercise

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})