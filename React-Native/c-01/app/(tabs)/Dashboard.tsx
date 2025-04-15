import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const TodoApp = () => {
  type Task = {
    id: string;
    title: string;
    details: string;
    completed: boolean;
  };
  
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleAddOrUpdate = () => {
    if (!taskName.trim() || !taskDetails.trim()) return;
  
    if (editingId) {
      setTasks((prev: Task[]) =>
        prev.map(task =>
          task.id === editingId
            ? { ...task, title: taskName, details: taskDetails }
            : task
        )
      );
      setEditingId(null);
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        title: taskName,
        details: taskDetails,
        completed: false,
      };
      setTasks((prev: Task[]) => [newTask, ...prev]);
    }
  
    setTaskName('');
    setTaskDetails('');
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  
  const toggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  

  const handleEdit = (task: Task) => {
    setTaskName(task.title);
    setTaskDetails(task.details);
    setEditingId(task.id);
  };
  

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };
  

  const renderItem = ({ item }: { item: Task }) => (
    <Animated.View style={[styles.taskItem, { opacity: fadeAnim }]}>
      <TouchableOpacity onPress={() => toggleComplete(item.id)}>
        <Text style={[styles.taskText, item.completed && styles.completed]}>
          {item.title}
        </Text>
        <Text style={styles.taskDetails}>{item.details}</Text>
      </TouchableOpacity>
  
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.editBtn]}
          onPress={() => handleEdit(item)}
        >
          <Text style={styles.actionText}>🛠️ Edit</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={[styles.actionBtn, styles.deleteBtn]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.actionText}>🗑️ Delete</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
  


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.heading}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task name"
          placeholderTextColor="#888"
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
        />
        <TextInput
          placeholder="Task details"
          placeholderTextColor="#888"
          style={styles.input}
          value={taskDetails}
          onChangeText={setTaskDetails}
        />
        <TouchableOpacity onPress={handleAddOrUpdate} style={styles.addBtn}>
          <Text style={styles.addBtnText}>{editingId ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 20 }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 48,
    backgroundColor: '#2a2a40',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: '#4c63ff',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  addBtnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  taskItem: {
    backgroundColor: '#2a2a40',
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
  },
  taskText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  taskDetails: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  actionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },
  editBtn: {
    backgroundColor: '#3c8fff',
  },
  deleteBtn: {
    backgroundColor: '#ff4d4d',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default TodoApp;
