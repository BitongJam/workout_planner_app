import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserContent from '../components/UserContent'
import Header from '../components/Header'

const User = () => {
  return (
   <>
    <Header title="User Account"/>
    <UserContent/>
   </>
  )
}

export default User

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }
})