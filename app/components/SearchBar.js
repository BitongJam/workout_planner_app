import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../data/colors'

const SearchBar = ({}) => {
  return (
    // TODO: Purpose for design only still search for creating of invovating searchbar
    <View style={styles.container}>
        <View style={styles.searchContainer}>
        <Text style={styles.searchText}>SearchBar</Text>
        </View>
   
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
    backgroundColor:colors.PRIMARY
    },
    searchContainer:{
        borderWidth: 1,
        marginHorizontal:20,
        marginBottom: 10,
        padding: 15,
        borderColor: colors.PRIMARY,
        backgroundColor: colors.LIGHT,
        borderRadius: 50
    },searchText:{
        fontSize: 15,
        color: colors.PRIMARY
    }
})