import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useTasks } from '../hooks/useTasks'

export default function AddTaskForm() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!title.trim()) return

    setLoading(true)
    await addTask({
      title: title.trim(),
      description: description.trim() || null,
      priority: 0,
      status: 'todo',
      due_date: null,
      tags: [],
      ai_metadata: {},
      user_id: '', // This will be set by the database service
    })
    setLoading(false)
    setTitle('')
    setDescription('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Task Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Description (optional)"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={loading}
        disabled={loading || !title.trim()}
      >
        Add Task
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
}) 