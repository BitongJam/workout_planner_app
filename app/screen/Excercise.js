import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ExcerciseContent from '../components/ExcerciseContent'

const Excercise = () => {
    return (
        <>
            <Header title="Exercises" />
            <SearchBar/>
            <ExcerciseContent/>
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