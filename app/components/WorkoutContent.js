import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../data/colors'
import workout_data from '../data/workout.json'
import { faHome,faUser,faDumbbell,faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the Home icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import FontAwesomeIconButton from './FontAwesomeIconButton';

const WorkoutContent = () => {
    const workoutExercises =({item})=>{
        return(
            <>
              
                {/* Body Container */}
                <View style={styles.workoutExcerciseContainer}>
                    <Text style={styles.workooutExcerciseText}>{item.exercise}</Text>
                    <Text style={styles.workooutExcerciseText}>{item.rep}</Text>
                    <Text style={styles.workooutExcerciseText}>{item.set}</Text>
                </View>
            </>
            
            
        )
        
    }
    const workoutData = ({ item }) => {
        return (
            <>
               
                <View style={styles.workoutContainer}>
                    <Text style={styles.workoutTitle}>{item.title}</Text>
                    <View style={styles.workoutExerciseContent}>
                          {/* Header Container */}
                        <View style={styles.workoutExcerciseContainer}>
                            <Text style={[styles.workooutExcerciseText,{fontWeight:'bold'}]}>Excercise</Text>
                            <Text style={[styles.workooutExcerciseText,{fontWeight:'bold'}]}>Reps</Text>
                            <Text style={[styles.workooutExcerciseText,{fontWeight:'bold'}]}>Sets</Text>
                        </View>
                        <FlatList
                            data={item.workout_content}
                            renderItem={workoutExercises}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </>
        );
    };
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
        <FontAwesomeIconButton icon={faPlus} size={30} color={colors.PRIMARY}/>
        </View>
        
          <FlatList data={workout_data} renderItem={workoutData}/>
    </View>
  )
}

export default WorkoutContent

const styles = StyleSheet.create({
    iconContainer:{
        alignItems:'flex-end',
        padding:5
    },
    container:{
        flex:1
    },
    workoutContainer:{
        margin:5,
        // borderRadius:15

    },workoutTitle:{
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:5,
        color: colors.SECONDARY
    },workoutExceriseContent:{
        borderWidth:1,
        borderColor:colors.SECONDARY,

    },workooutExcerciseText:{
        color:colors.SECONDARY,
        flex:1
    },workoutExcerciseContainer:{
        flexDirection: 'row',
        ustifyContent: 'space-between', 
    },workoutExerciseContent:{
        borderWidth:1,
        borderColor:colors.SECONDARY,
        padding: 10,
        borderRadius: 10
    }
})