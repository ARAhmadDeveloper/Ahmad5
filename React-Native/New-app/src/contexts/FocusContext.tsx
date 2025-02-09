import { createContext, useContext, useState } from 'react'
import { databaseService } from '../services/databaseService'
import type { Task, FocusSession } from '../types/database'

type FocusContextType = {
  activeSession: FocusSession | null
  activeTask: Task | null
  startSession: (task: Task) => Promise<void>
  pauseSession: () => Promise<void>
  resumeSession: () => Promise<void>
  completeSession: () => Promise<void>
  isRunning: boolean
}

const FocusContext = createContext<FocusContextType>({
  activeSession: null,
  activeTask: null,
  startSession: async () => {},
  pauseSession: async () => {},
  resumeSession: async () => {},
  completeSession: async () => {},
  isRunning: false,
})

export function FocusProvider({ children }: { children: React.ReactNode }) {
  const [activeSession, setActiveSession] = useState<FocusSession | null>(null)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const startSession = async (task: Task) => {
    const session = await databaseService.focusSessions.create({
      task_id: task.id,
      user_id: task.user_id,
      start_time: new Date().toISOString(),
      end_time: null,
      duration: 0,
      status: 'active',
      notes: null,
    })

    if (session) {
      setActiveSession(session)
      setActiveTask(task)
      setIsRunning(true)
    }
  }

  const pauseSession = async () => {
    if (activeSession) {
      const updatedSession = await databaseService.focusSessions.update(
        activeSession.id,
        { status: 'paused' }
      )
      if (updatedSession) {
        setActiveSession(updatedSession)
        setIsRunning(false)
      }
    }
  }

  const resumeSession = async () => {
    if (activeSession) {
      const updatedSession = await databaseService.focusSessions.update(
        activeSession.id,
        { status: 'active' }
      )
      if (updatedSession) {
        setActiveSession(updatedSession)
        setIsRunning(true)
      }
    }
  }

  const completeSession = async () => {
    if (activeSession) {
      const updatedSession = await databaseService.focusSessions.update(
        activeSession.id,
        {
          status: 'completed',
          end_time: new Date().toISOString(),
        }
      )
      if (updatedSession) {
        setActiveSession(null)
        setActiveTask(null)
        setIsRunning(false)
      }
    }
  }

  return (
    <FocusContext.Provider
      value={{
        activeSession,
        activeTask,
        startSession,
        pauseSession,
        resumeSession,
        completeSession,
        isRunning,
      }}
    >
      {children}
    </FocusContext.Provider>
  )
}

export const useFocus = () => useContext(FocusContext) 