import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { databaseService } from '../services/databaseService'
import type { Task } from '../types/database'

export function useTasks() {
  const { session } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (session?.user?.id) {
      loadTasks()
    }
  }, [session?.user?.id])

  const loadTasks = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const tasks = await databaseService.tasks.getAll(session!.user!.id)
      setTasks(tasks)
    } catch (err) {
      setError('Failed to load tasks')
      console.error('Error loading tasks:', err)
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (task: Omit<Task, 'id' | 'created_at' | 'updated_at'>) => {
    const newTask = await databaseService.tasks.create(task)
    if (newTask) {
      setTasks(prev => [...prev, newTask])
      return newTask
    }
    return null
  }

  const updateTask = async (id: string, updates: Partial<Task>) => {
    const updatedTask = await databaseService.tasks.update(id, updates)
    if (updatedTask) {
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task))
      return updatedTask
    }
    return null
  }

  const deleteTask = async (id: string) => {
    const success = await databaseService.tasks.delete(id)
    if (success) {
      setTasks(prev => prev.filter(task => task.id !== id))
    }
    return success
  }

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    refresh: loadTasks,
  }
} 