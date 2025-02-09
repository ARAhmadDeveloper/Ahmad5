export type User = {
  id: string
  email: string
  created_at: string
  last_login: string
  settings: UserSettings
}

export type UserSettings = {
  theme?: 'light' | 'dark'
  notifications_enabled?: boolean
  focus_duration?: number
  break_duration?: number
}

export type Task = {
  id: string
  user_id: string
  title: string
  description: string | null
  priority: number
  status: 'todo' | 'in_progress' | 'completed'
  due_date: string | null
  created_at: string
  updated_at: string
  tags: string[]
  ai_metadata: TaskAIMetadata
}

export type TaskAIMetadata = {
  importance_score?: number
  urgency_score?: number
  complexity_score?: number
  suggested_duration?: number
  category?: string
}

export type FocusSession = {
  id: string
  user_id: string
  task_id: string
  start_time: string
  end_time: string | null
  duration: number
  status: 'active' | 'paused' | 'completed'
  notes: string | null
}

export type Analytics = {
  id: string
  user_id: string
  session_id: string
  metrics: AnalyticsMetrics
  created_at: string
}

export type AnalyticsMetrics = {
  focus_duration: number
  breaks_taken: number
  tasks_completed: number
  productivity_score?: number
  focus_score?: number
} 