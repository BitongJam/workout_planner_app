import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ExcerciseContent from '../components/ExcerciseContent'
import CircleButtonFontAwesome from '../components/CircleButtonFontAwesome'

const Excercise = () => {
    return (
        <>
            <Header title="Exercises" />
            <SearchBar/>
            <ExcerciseContent/>
            <CircleButtonFontAwesome style={styles.bttnAdd} color={'blue'} iconColor={'white'}/>
        </>

    )
}

export default Excercise

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, bttnAdd:{
        position: 'absolute',
        right: 15,
        bottom: 30,
        zIndex: 1,
        
    },
})