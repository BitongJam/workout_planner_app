import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import WorkoutContent from '../components/WorkoutContent'

const Workout = () => {
  return (
    <>
      <Header title="Workout"/>
      <WorkoutContent/>
    </>
  )
}

export default Workout

const styles = StyleSheet.create({ container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }})