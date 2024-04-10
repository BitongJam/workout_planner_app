import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import DashboardContent from '../components/DashboardContent'
import ps from '../data/ps.json'

const Home = () => {
  
  return (
    <>
    <Header title='Dashboard'/>
    <View style={styles.container}>
      <DashboardContent title='Personal Record' data_content={ps}/>
    </View>
    </>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})