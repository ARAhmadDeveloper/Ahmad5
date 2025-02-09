import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Card, Text, IconButton, MD3Colors, Menu } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTasks } from '../hooks/useTasks'
import { useFocus } from '../contexts/FocusContext'
import type { Task } from '../types/database'

type TaskItemProps = {
  task: Task
  onPress?: () => void
}

export default function TaskItem({ task, onPress }: TaskItemProps) {
  const { updateTask, deleteTask } = useTasks()
  const { startSession } = useFocus()
  const [menuVisible, setMenuVisible] = React.useState(false)

  const handleStatusChange = async () => {
    const newStatus = task.status === 'completed' ? 'todo' : 'completed'
    await updateTask(task.id, { status: newStatus })
  }

  const handlePriorityChange = async (priority: number) => {
    await updateTask(task.id, { priority })
    setMenuVisible(false)
  }

  const handleDelete = async () => {
    setMenuVisible(false)
    await deleteTask(task.id)
  }

  const handleFocus = () => {
    startSession(task)
  }

  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 2: return MD3Colors.error50
      case 1: return MD3Colors.warning50
      default: return MD3Colors.neutral50
    }
  }

  return (
    <Pressable onPress={onPress}>
      <Card style={styles.card} mode="outlined">
        <Card.Content style={styles.content}>
          <View style={styles.taskInfo}>
            <IconButton
              icon={task.status === 'completed' ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
              onPress={handleStatusChange}
              size={24}
              iconColor={task.status === 'completed' ? MD3Colors.primary40 : MD3Colors.neutral40}
            />
            <View style={styles.textContainer}>
              <View style={styles.titleRow}>
                <Text
                  variant="titleMedium"
                  style={[
                    styles.title,
                    task.status === 'completed' && styles.completed
                  ]}
                >
                  {task.title}
                </Text>
                <MaterialCommunityIcons 
                  name="flag" 
                  size={16} 
                  color={getPriorityColor(task.priority)}
                  style={styles.priorityFlag}
                />
              </View>
              {task.description && (
                <Text
                  variant="bodyMedium"
                  style={[
                    styles.description,
                    task.status === 'completed' && styles.completed
                  ]}
                  numberOfLines={2}
                >
                  {task.description}
                </Text>
              )}
              {task.due_date && (
                <View style={styles.dueDate}>
                  <MaterialCommunityIcons name="calendar" size={14} color={MD3Colors.neutral60} />
                  <Text variant="bodySmall" style={styles.dueDateText}>
                    {new Date(task.due_date).toLocaleDateString()}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.actions}>
            <IconButton
              icon="timer"
              onPress={handleFocus}
              size={20}
              iconColor={MD3Colors.primary40}
            />
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <IconButton
                  icon="dots-vertical"
                  onPress={() => setMenuVisible(true)}
                  size={20}
                />
              }
            >
              <Menu.Item 
                onPress={() => handlePriorityChange(2)} 
                title="High Priority"
                leadingIcon="flag"
              />
              <Menu.Item 
                onPress={() => handlePriorityChange(1)} 
                title="Medium Priority"
                leadingIcon="flag"
              />
              <Menu.Item 
                onPress={() => handlePriorityChange(0)} 
                title="Low Priority"
                leadingIcon="flag"
              />
              <Menu.Divider />
              <Menu.Item 
                onPress={handleDelete} 
                title="Delete"
                leadingIcon="delete"
              />
            </Menu>
          </View>
        </Card.Content>
      </Card>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    marginRight: 4,
  },
  priorityFlag: {
    marginTop: 2,
  },
  description: {
    color: MD3Colors.neutral60,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: MD3Colors.neutral40,
  },
  dueDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  dueDateText: {
    marginLeft: 4,
    color: MD3Colors.neutral60,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}) 