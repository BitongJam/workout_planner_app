import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as FontAwesomeFreeIcon from '@fortawesome/free-solid-svg-icons';
import colors from '../data/colors';

const CircleButtonFontAwesome = ({ color, icon, iconColor,style }) => {
  const selectedIcon = FontAwesomeFreeIcon.faPlus;
  return (
    <TouchableOpacity style={[styles.btnIconContainer, { ...style }]}>
        <FontAwesomeIcon icon={selectedIcon} color={iconColor} />
    </TouchableOpacity>
  )
}

export default CircleButtonFontAwesome

const styles = StyleSheet.create({
  btnIconContainer: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  }
})
