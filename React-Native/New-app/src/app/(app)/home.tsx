import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import TaskList from '../../components/TaskList'
import AddTaskForm from '../../components/AddTaskForm'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Tasks</Text>
      <AddTaskForm />
      <TaskList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 16,
    paddingBottom: 0,
  },
}) 