import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import User from '../screen/User';
import Workout from '../screen/Workout';
import Excercise from '../screen/Excercise';
import Main from '../screen/Main';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,faUser,faDumbbell,faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the Home icon

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator initialRouteName="Excercise">
      <Tab.Screen 
        name="Home" 
        component={Main}  
        options={{
          tabBarLabel: 'Home', // Changed tabBarLabel to 'Home'
          tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
          <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen name="User"  component={User} screenOptions={true}
       options={{
        tabBarLabel: 'User', // Changed tabBarLabel to 'Home'
        tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
        <FontAwesomeIcon icon={faUser} color={color} size={size} />
        ),
        // tabBarBadge: 3,
      }}/>
      <Tab.Screen name="Workout" component={Workout} 
       options={{
        tabBarLabel: 'Workout', // Changed tabBarLabel to 'Home'
        tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
          <FontAwesomeIcon icon={faPlus} color={color} size={size} />
        ),
        // tabBarBadge: 3,
      }}/>
      <Tab.Screen name="Excercise" component={Excercise}
       options={{
        tabBarLabel: 'Excercise', // Changed tabBarLabel to 'Home'
        tabBarIcon: ({ color, size }) => ( // Updated tabBarIcon
          <FontAwesomeIcon icon={faDumbbell} color={color} size={size} />
        ),
        // tabBarBadge: 3,
      }}/>
    </Tab.Navigator>
  )
}

export default BottomNav;

const styles = StyleSheet.create({
    container:{
        borderWidth:1
    }
});
