import React from 'react'
import { useEffect } from 'react'
import { PaperProvider } from 'react-native-paper'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'
import { FocusProvider } from '../contexts/FocusContext'
import { Slot, useRouter, useSegments } from 'expo-router'

// Auth guard component to handle protected routes
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth()
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    if (loading) return

    const inAuthGroup = segments[0] === '(auth)'

    if (!session && !inAuthGroup) {
      // Redirect to sign-in if not authenticated
      router.replace('/(auth)/sign-in')
    } else if (session && inAuthGroup) {
      // Redirect to home if already authenticated
      router.replace('/(app)/home')
    }
  }, [session, loading, segments])

  if (loading) {
    // You might want to add a loading screen here
    return null
  }

  return <>{children}</>
}

export default function RootLayout() {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <FocusProvider>
            <AuthGuard>
              <Slot />
            </AuthGuard>
          </FocusProvider>
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
  )
} 