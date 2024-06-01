import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

const UserContent = () => {
  return (
    <View style={styles.container}>
     <Image
     style={styles.image}
        source={{ uri: "https://www.alansonsample.com/images/Alanson_Headshot.jpg" }}/>
        <View>
            <Text style={styles.userContentText}>First Name </Text>
            <Text style={styles.userContentText}>Last Name </Text>
        </View>
      
    </View>
  )
}

export default UserContent

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:3,
        margin: 20
    },
    image:{
        borderWidth:1,
        width:120,
        height:120,
        borderRadius: 100,
        marginRight: 10
    },userContentText:{
        fontSize:25
    }

})