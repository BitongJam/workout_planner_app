import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../data/data.json'

const User = () => {
  const renderItem = ({ item }) => (
    <View style={styles.dashboardItemContainer}>
      <Text>{item.title}</Text>
      <View style={{borderWidth:1,height:160,marginHorizontal:10}}></View>
    </View>
  );
  return (
    <View>
      <View style={{borderWidth:1,padding:30,paddingTop:50,paddingLeft:40}}>
        <Text style={{fontSize:30,fontWeight: 'bold'}}>User</Text>
      </View>
      <View style={{padding:15,paddingLeft:25,flexDirection:'row',width:'100%'}}>
        <View style={styles.profileContainer}>
          <Image
              style={styles.profilePic}
              source={require('../../assets/434301075_384540367744884_2521690211608744781_n.jpg')} // Provide the path to your image here
            />
        </View>
        <View style={{justifyContent:'center',width:'auto',marginLeft:20}}>
          <>
          <Text style={{fontWeight: 'bold'}}>
            James Michael Ortiz dsfsdfmlsdkjfkdsf
          </Text>
          <Text>
            0 Workouts
          </Text>
          </>
          
        </View>
       
        
      </View>
      <View style={{borderWidth:1,paddingHorizontal:15,paddingTop:10}}>
          <Text>
            Dashboard
          </Text>
          <FlatList style={styles.dashboardContainer} data={data} renderItem={renderItem}
      keyExtractor={item => item.id}/>
        </View>
     
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  profileContainer: {
    width: 80,
    height: 80,
    borderRadius: 60, // Half of width and height to make it a circle
    overflow: 'hidden', // To hide the overflowing part of the image
    marginBottom: 10,
  },profilePic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },dashboardContainer:{
  },dashboardItemContainer:{
    borderRadius:10,
    borderWidth:1,
    marginHorizontal:2,
    marginBottom:5,
    padding: 10
  }
})