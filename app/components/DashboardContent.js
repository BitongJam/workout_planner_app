import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../data/colors'
import pr_data from '../data/ps.json'

const DashboardContent = ({ title, data_content }) => {
  const dashboardListContentView = ({ item }) =>
  <View style={styles.dashboard_data_container}>
    <Text style={styles.dasboardTextContent}>{item.excercise}</Text>
    <Text style={styles.dasboardTextContent}>{item.before}</Text>
    <Text style={styles.dasboardTextContent}>{item.new_rec}</Text>
  </View>

  return (
    <View style={styles.container}>
      <Text style={styles.dashboardTitle}>{title}</Text>
      <View style={styles.contentContainer}>

        {/* For Dashbord Content */}
        <FlatList
          data={data_content}
          renderItem={dashboardListContentView}
          keyExtractor={item => item.id}
        />
        {/* <Text style={styles.dasboardTextContent}>{content.excercise}</Text> */}
      </View>
    </View>
  )
}

export default DashboardContent

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  dashboardTitle: {
    color: colors.SECONDARY,
    marginBottom: 5
  },
  dasboardTextContent: {
    color: colors.SECONDARY,
    flex: 1 // Each text component will take up equal space
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: colors.SECONDARY,
    padding: 10,
    borderRadius: 10
  },
  dashboard_data_container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // To evenly distribute space between text components
    marginBottom: 5 // Adjust spacing between each row of data
  }
});

