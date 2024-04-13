import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,faUser,faDumbbell,faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the Home icon
import Home from '../screen/Home';
import colors from "../data/colors";
import Workout from '../screen/Workout';
import Excercise from '../screen/Excercise';
import User from '../screen/User';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
      <Tab.Navigator initialRouteName="Workout" activeColor={colors.PRIMARY}
      inactiveColor={colors.SECONDARY}  barStyle={{ backgroundColor: colors.LIGHT }}>
        <Tab.Screen name="Workout" component={Workout}
        options={{
          tabBarLabel: 'Workout', // Changed tabBarLabel to 'Home'
          tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
          <FontAwesomeIcon icon={faPlus} color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }} />

        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home', // Changed tabBarLabel to 'Home'
          tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
          <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }} />

        <Tab.Screen name="Excercise" component={Excercise}
              options={{
                tabBarLabel: 'Excercise', // Changed tabBarLabel to 'Home'
                tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
                <FontAwesomeIcon icon={faDumbbell} color={color} size={size} />
                ),
                // tabBarBadge: 3,
              }} />

        <Tab.Screen name="User" component={User}
              options={{
                tabBarLabel: 'User', // Changed tabBarLabel to 'Home'
                tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
                <FontAwesomeIcon icon={faUser} color={color} size={size} />
                ),
                // tabBarBadge: 3,
              }} />
    </Tab.Navigator>
  );

  // return (
  //   <Tab.Navigator initialRouteName="Home" screenOptions={{
  //     tabBarActiveTintColor: colors.ERROR
  //   }}>
  //     <Tab.Screen 
  //       name="Home" 
  //       component={Home}  
  //       options={{
  //         tabBarLabel: 'Home', // Changed tabBarLabel to 'Home'
  //         tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
  //         <FontAwesomeIcon icon={faHome} color={color} size={size} />
  //         ),
  //         // tabBarBadge: 3,
  //       }}
  //     />
  //   </Tab.Navigator>
  // )
}

export default BottomNav;

const styles = StyleSheet.create({
    container:{
        borderWidth:1
    }
});
