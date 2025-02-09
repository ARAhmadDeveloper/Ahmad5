import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { ActivityIndicator, Text, FAB } from 'react-native-paper'
import { useTasks } from '../hooks/useTasks'
import TaskItem from './TaskItem'
import TaskDetailModal from './TaskDetailModal'
import type { Task } from '../types/database'

export default function TaskList() {
  const { tasks, loading, error } = useTasks()
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)

  const handleTaskPress = (task: Task) => {
    setSelectedTask(task)
    setIsEditing(true)
    setModalVisible(true)
  }

  const handleAddTask = () => {
    setSelectedTask(null)
    setIsEditing(false)
    setModalVisible(true)
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text variant="bodyLarge" style={styles.error}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onPress={() => handleTaskPress(item)} />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.centered}>
            <Text variant="bodyLarge">No tasks yet</Text>
          </View>
        }
      />
      
      <FAB
        icon="plus"
        onPress={handleAddTask}
        style={styles.fab}
      />

      <TaskDetailModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        task={selectedTask}
        isEditing={isEditing}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
    paddingBottom: 80, // Space for FAB
  },
  error: {
    color: 'red',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
}) 