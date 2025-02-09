import React from 'react'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, Menu } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { authService } from '../services/authService'

export default function HeaderRight() {
  const [menuVisible, setMenuVisible] = useState(false)
  const router = useRouter()

  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  const handleSettings = () => {
    closeMenu()
    router.push('/(app)/settings')
  }

  const handleSignOut = async () => {
    closeMenu()
    await authService.signOut()
    router.replace('/(auth)/sign-in')
  }

  return (
    <View style={styles.container}>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
        anchorPosition="bottom"
      >
        <Menu.Item onPress={handleSettings} title="Settings" leadingIcon="cog" />
        <Menu.Item onPress={handleSignOut} title="Sign Out" leadingIcon="logout" />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
}) 