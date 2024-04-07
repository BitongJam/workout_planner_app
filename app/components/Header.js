import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../data/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: '10%',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY
    },headerText:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    }
})