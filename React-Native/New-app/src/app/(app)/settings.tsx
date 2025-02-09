import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { List, Switch, Divider, useTheme } from 'react-native-paper'
import { useAuth } from '../../contexts/AuthContext'
import { authService } from '../../services/authService'
import { useRouter } from 'expo-router'

export default function Settings() {
  const { session } = useAuth()
  const router = useRouter()
  const theme = useTheme()

  const handleSignOut = async () => {
    await authService.signOut()
    router.replace('/(auth)/sign-in')
  }

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item
          title="Email"
          description={session?.user?.email}
          left={props => <List.Icon {...props} icon="email" />}
        />
        <Divider />
        <List.Item
          title="Profile Settings"
          left={props => <List.Icon {...props} icon="account-cog" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title="Dark Mode"
          left={props => <List.Icon {...props} icon="theme-light-dark" />}
          right={() => <Switch value={theme.dark} />}
        />
        <List.Item
          title="Notifications"
          left={props => <List.Icon {...props} icon="bell" />}
          right={() => <Switch value={true} />}
        />
        <List.Item
          title="Focus Duration"
          description="25 minutes"
          left={props => <List.Icon {...props} icon="timer" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Support</List.Subheader>
        <List.Item
          title="Help & FAQ"
          left={props => <List.Icon {...props} icon="help-circle" />}
        />
        <List.Item
          title="Contact Support"
          left={props => <List.Icon {...props} icon="message" />}
        />
        <List.Item
          title="About"
          left={props => <List.Icon {...props} icon="information" />}
        />
      </List.Section>

      <List.Section>
        <List.Item
          title="Sign Out"
          left={props => <List.Icon {...props} icon="logout" color={theme.colors.error} />}
          onPress={handleSignOut}
          titleStyle={{ color: theme.colors.error }}
        />
      </List.Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}) 