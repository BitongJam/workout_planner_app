import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import excercise_data_sample from '../data/excercise.json'
import colors from '../data/colors'

const ExcerciseContent = () => {

    const renderExcerciseItem = ({ item }) => {
        return (
            <View style={styles.excercisesDataContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: item.img_url }}
                    resizeMode="cover"
                />
                <Text style={styles.excerciseDataText}>{item.id}</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={excercise_data_sample}
        renderItem={renderExcerciseItem}
        keyExtractor={item => item.id.toString()} // assuming item.id is numeric
      />
    </View>
  )
}

export default ExcerciseContent

const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    excercisesDataContainer:{
        marginVertical: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems:'center'
    },
    image: {
        // width: 100,
        // height: 100,
        marginBottom: 5,
        borderWidth:1,
        width:50,
        height:50,
        borderRadius: 100,
        marginRight: 10
    },excerciseDataText:{
        fontSize:25,
        color:colors.SECONDARY
    }
})
