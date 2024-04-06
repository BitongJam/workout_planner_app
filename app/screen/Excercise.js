import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import excercise from '../data/excercise.json'

const Excercise = () => {
  const renderItem = ({ item }) => (
    <View style={{
      width: 80,
      height: 80,
      borderRadius: 60, // Half of width and height to make it a circle
      overflow: 'hidden', // To hide the overflowing part of the image
      marginBottom: 10,
    }}>
     
        <Image src={item.img_url} style={{ width: '100%',height: '100%',resizeMode: 'cover'}}/>
      
{/*      
      <View style={{borderWidth:1,height:70,marginHorizontal:10}}> */}
        <Text>{item.title}</Text>
      {/* </View> */}
    </View>
  );

  return (
    <View style={{marginHorizontal:20,marginTop:10}}>
      <Text>Recent</Text>
      
      <FlatList data={excercise} renderItem={renderItem}/>
  
     
    </View>
  )
}

export default Excercise

const styles = StyleSheet.create({})