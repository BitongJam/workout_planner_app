import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header title='Dashboard'/>
    <View style={styles.container}>
      
      <Text>Home</Text>
    </View>
    </>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})