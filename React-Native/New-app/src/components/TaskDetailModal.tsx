import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Portal, Modal, Text, Button, TextInput, SegmentedButtons, MD3Colors } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Task } from '../types/database'
import { useTasks } from '../hooks/useTasks'

type TaskDetailModalProps = {
  visible: boolean
  onDismiss: () => void
  task?: Task | null
  isEditing?: boolean
}

export default function TaskDetailModal({ 
  visible, 
  onDismiss, 
  task = null, 
  isEditing = false 
}: TaskDetailModalProps) {
  const { addTask, updateTask } = useTasks()
  const [title, setTitle] = React.useState(task?.title || '')
  const [description, setDescription] = React.useState(task?.description || '')
  const [priority, setPriority] = React.useState(task?.priority || 0)
  const [dueDate, setDueDate] = React.useState<Date | null>(
    task?.due_date ? new Date(task.due_date) : null
  )
  const [showDatePicker, setShowDatePicker] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleSave = async () => {
    if (!title.trim()) return

    setLoading(true)
    try {
      const taskData = {
        title: title.trim(),
        description: description.trim() || null,
        priority,
        due_date: dueDate?.toISOString() || null,
        status: task?.status || 'todo',
        tags: task?.tags || [],
        ai_metadata: task?.ai_metadata || {},
        user_id: task?.user_id || '', // Will be set by database service
      }

      if (task && isEditing) {
        await updateTask(task.id, taskData)
      } else {
        await addTask(taskData)
      }
      onDismiss()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.container}
      >
        <ScrollView>
          <Text variant="titleLarge" style={styles.title}>
            {isEditing ? 'Edit Task' : 'New Task'}
          </Text>

          <TextInput
            label="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <TextInput
            label="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
            style={styles.input}
          />

          <Text variant="bodyMedium" style={styles.label}>Priority</Text>
          <SegmentedButtons
            value={priority.toString()}
            onValueChange={value => setPriority(Number(value))}
            buttons={[
              {
                value: '0',
                label: 'Low',
                icon: 'flag',
                checkedColor: MD3Colors.neutral50,
              },
              {
                value: '1',
                label: 'Medium',
                icon: 'flag',
                checkedColor: MD3Colors.warning50,
              },
              {
                value: '2',
                label: 'High',
                icon: 'flag',
                checkedColor: MD3Colors.error50,
              },
            ]}
            style={styles.segmentedButtons}
          />

          <Button
            mode="outlined"
            onPress={() => setShowDatePicker(true)}
            icon="calendar"
            style={styles.dateButton}
          >
            {dueDate ? dueDate.toLocaleDateString() : 'Set Due Date'}
          </Button>

          {showDatePicker && (
            <DateTimePicker
              value={dueDate || new Date()}
              mode="date"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false)
                if (selectedDate) {
                  setDueDate(selectedDate)
                }
              }}
            />
          )}

          <View style={styles.actions}>
            <Button
              mode="outlined"
              onPress={onDismiss}
              style={styles.button}
            >
              Cancel
            </Button>
            <Button
              mode="contained"
              onPress={handleSave}
              loading={loading}
              disabled={loading || !title.trim()}
              style={styles.button}
            >
              Save
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    maxHeight: '80%',
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  dateButton: {
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  button: {
    minWidth: 100,
  },
}) 