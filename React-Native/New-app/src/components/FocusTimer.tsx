import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
import { Text, Button, IconButton, Surface, Portal, Modal } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFocus } from '../contexts/FocusContext'
import { useTheme } from '../contexts/ThemeContext'

const FOCUS_DURATION = 25 * 60 // 25 minutes in seconds
const BREAK_DURATION = 5 * 60 // 5 minutes in seconds

export default function FocusTimer() {
  const { activeTask, isRunning, pauseSession, resumeSession, completeSession } = useFocus()
  const { theme } = useTheme()
  const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION)
  const [isBreak, setIsBreak] = useState(false)
  const [showBreakModal, setShowBreakModal] = useState(false)
  const [rotation] = useState(new Animated.Value(0))

  // Circular progress animation
  useEffect(() => {
    if (isRunning) {
      Animated.timing(rotation, {
        toValue: 1,
        duration: timeLeft * 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
    }
  }, [isRunning])

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      if (!isBreak) {
        setShowBreakModal(true)
      } else {
        completeSession()
      }
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft, isBreak])

  const startBreak = () => {
    setTimeLeft(BREAK_DURATION)
    setIsBreak(true)
    setShowBreakModal(false)
    resumeSession()
  }

  const skipBreak = () => {
    setShowBreakModal(false)
    completeSession()
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const progress = 1 - timeLeft / (isBreak ? BREAK_DURATION : FOCUS_DURATION)
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.container}>
      <Surface style={styles.timerContainer} elevation={2}>
        <Animated.View
          style={[
            styles.progressCircle,
            {
              borderColor: theme.colors.primary,
              transform: [{ rotate: spin }],
            },
          ]}
        />
        <View style={styles.timerContent}>
          <Text variant="displayLarge" style={styles.timer}>
            {formatTime(timeLeft)}
          </Text>
          <Text variant="titleMedium" style={styles.phase}>
            {isBreak ? 'Break Time' : 'Focus Time'}
          </Text>
          {activeTask && (
            <Text variant="bodyLarge" style={styles.task}>
              {activeTask.title}
            </Text>
          )}
        </View>
      </Surface>

      <View style={styles.controls}>
        {isRunning ? (
          <IconButton
            icon="pause-circle"
            size={64}
            onPress={pauseSession}
            iconColor={theme.colors.primary}
          />
        ) : (
          <IconButton
            icon="play-circle"
            size={64}
            onPress={resumeSession}
            iconColor={theme.colors.primary}
          />
        )}
        <IconButton
          icon="stop-circle"
          size={48}
          onPress={completeSession}
          iconColor={theme.colors.error}
          style={styles.stopButton}
        />
      </View>

      <Portal>
        <Modal
          visible={showBreakModal}
          onDismiss={skipBreak}
          contentContainerStyle={styles.modal}
        >
          <Text variant="headlineSmall" style={styles.modalTitle}>
            Time for a Break!
          </Text>
          <Text variant="bodyLarge" style={styles.modalText}>
            Great work! Would you like to take a 5-minute break?
          </Text>
          <View style={styles.modalActions}>
            <Button mode="outlined" onPress={skipBreak}>
              Skip Break
            </Button>
            <Button mode="contained" onPress={startBreak}>
              Start Break
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  timerContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  progressCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 150,
    borderWidth: 4,
    borderStyle: 'dashed',
  },
  timerContent: {
    alignItems: 'center',
  },
  timer: {
    fontSize: 64,
    marginBottom: 8,
  },
  phase: {
    marginBottom: 16,
  },
  task: {
    textAlign: 'center',
    opacity: 0.7,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopButton: {
    marginLeft: 16,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalTitle: {
    marginBottom: 16,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 24,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}) 