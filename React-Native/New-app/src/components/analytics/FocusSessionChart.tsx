import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from '../../contexts/ThemeContext'

const screenWidth = Dimensions.get('window').width

export default function FocusSessionChart() {
  const { theme } = useTheme()

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [2, 3.5, 2.5, 4, 1.5, 3, 2],
        color: () => theme.colors.primary,
        strokeWidth: 2,
      },
    ],
  }

  const chartConfig = {
    backgroundGradientFrom: theme.colors.background,
    backgroundGradientTo: theme.colors.background,
    decimalPlaces: 1,
    color: () => theme.colors.primary,
    labelColor: () => theme.colors.onBackground,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: theme.colors.primary,
    },
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>Daily Focus Hours</Text>
      <LineChart
        data={data}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  chart: {
    borderRadius: 16,
  },
}) 