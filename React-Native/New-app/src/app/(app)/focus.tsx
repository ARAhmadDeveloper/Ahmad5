import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import FocusTimer from '../../components/FocusTimer'
import { useFocus } from '../../contexts/FocusContext'

export default function Focus() {
  const { activeTask } = useFocus()

  if (!activeTask) {
    return (
      <View style={styles.container}>
        <Text variant="bodyLarge">
          Select a task to start focusing
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FocusTimer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}) 