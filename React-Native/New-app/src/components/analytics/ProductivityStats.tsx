import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type StatCardProps = {
  icon: string
  value: string
  label: string
  color?: string
}

function StatCard({ icon, value, label, color }: StatCardProps) {
  const { colors } = useTheme()
  
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <MaterialCommunityIcons 
          name={icon} 
          size={24} 
          color={color || colors.primary} 
        />
        <Text variant="headlineMedium" style={styles.value}>{value}</Text>
        <Text variant="bodyMedium">{label}</Text>
      </Card.Content>
    </Card>
  )
}

export default function ProductivityStats() {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <StatCard
          icon="clock-outline"
          value="12.5h"
          label="Total Focus Time"
        />
        <StatCard
          icon="check-circle-outline"
          value="24"
          label="Tasks Completed"
          color={colors.secondary}
        />
      </View>
      <View style={styles.row}>
        <StatCard
          icon="fire"
          value="5"
          label="Day Streak"
          color={colors.error}
        />
        <StatCard
          icon="trending-up"
          value="85%"
          label="Productivity"
          color={colors.tertiary}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
  },
  cardContent: {
    alignItems: 'center',
    padding: 16,
  },
  value: {
    marginVertical: 8,
  },
}) 