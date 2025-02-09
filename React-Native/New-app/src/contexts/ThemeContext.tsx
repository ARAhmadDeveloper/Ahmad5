import React, { createContext, useContext, useState } from 'react'
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper'

type ThemeContextType = {
  isDarkMode: boolean
  toggleTheme: () => void
  theme: MD3Theme
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: MD3LightTheme,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: () => setIsDarkMode(!isDarkMode), theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 