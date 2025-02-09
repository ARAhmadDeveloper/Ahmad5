import { supabase } from '../lib/supabase'
import type { Task, FocusSession, Analytics } from '../types/database'

export const databaseService = {
  tasks: {
    async create(task: Omit<Task, 'id' | 'created_at' | 'updated_at'>): Promise<Task | null> {
      const { data, error } = await supabase
        .from('tasks')
        .insert(task)
        .select()
        .single()

      if (error) {
        console.error('Error creating task:', error)
        return null
      }

      return data
    },

    async getAll(userId: string): Promise<Task[]> {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)
        .order('priority', { ascending: false })

      if (error) {
        console.error('Error fetching tasks:', error)
        return []
      }

      return data
    },

    async update(id: string, updates: Partial<Task>): Promise<Task | null> {
      const { data, error } = await supabase
        .from('tasks')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Error updating task:', error)
        return null
      }

      return data
    },

    async delete(id: string): Promise<boolean> {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting task:', error)
        return false
      }

      return true
    }
  },

  focusSessions: {
    async create(session: Omit<FocusSession, 'id'>): Promise<FocusSession | null> {
      const { data, error } = await supabase
        .from('focus_sessions')
        .insert(session)
        .select()
        .single()

      if (error) {
        console.error('Error creating focus session:', error)
        return null
      }

      return data
    },

    async update(id: string, updates: Partial<FocusSession>): Promise<FocusSession | null> {
      const { data, error } = await supabase
        .from('focus_sessions')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Error updating focus session:', error)
        return null
      }

      return data
    },

    async getUserSessions(userId: string): Promise<FocusSession[]> {
      const { data, error } = await supabase
        .from('focus_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('start_time', { ascending: false })

      if (error) {
        console.error('Error fetching focus sessions:', error)
        return []
      }

      return data
    }
  },

  analytics: {
    async create(analytics: Omit<Analytics, 'id' | 'created_at'>): Promise<Analytics | null> {
      const { data, error } = await supabase
        .from('analytics')
        .insert(analytics)
        .select()
        .single()

      if (error) {
        console.error('Error creating analytics:', error)
        return null
      }

      return data
    },

    async getUserAnalytics(userId: string): Promise<Analytics[]> {
      const { data, error } = await supabase
        .from('analytics')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching analytics:', error)
        return []
      }

      return data
    }
  }
} 