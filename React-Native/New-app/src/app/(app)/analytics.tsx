import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SegmentedButtons, Text } from 'react-native-paper'
import ProductivityStats from '../../components/analytics/ProductivityStats'
import FocusSessionChart from '../../components/analytics/FocusSessionChart'

type TimeRange = 'week' | 'month' | 'year'

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<TimeRange>('week')

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Analytics</Text>
      
      <SegmentedButtons
        value={timeRange}
        onValueChange={value => setTimeRange(value as TimeRange)}
        buttons={[
          { value: 'week', label: 'Week' },
          { value: 'month', label: 'Month' },
          { value: 'year', label: 'Year' },
        ]}
        style={styles.timeRange}
      />

      <ProductivityStats />
      <FocusSessionChart />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 16,
    paddingBottom: 8,
  },
  timeRange: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
}) 