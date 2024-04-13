import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const FontAwesomeIconButton = ({onPress, size, color,icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={icon} size={size} color={color}/>
    </TouchableOpacity>
  );
  
}

export default FontAwesomeIconButton

const styles = StyleSheet.create({
  btn:{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: 20,
        }
})