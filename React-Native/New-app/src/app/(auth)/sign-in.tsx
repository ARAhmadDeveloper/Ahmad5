import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'
import { Link, router } from 'expo-router'
import { authService } from '../../services/authService'


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async () => {
    setLoading(true)
    setError(null)
    
    const response = await authService.signIn(email, password)
    
    if (response.error) {
      setError(response.error.message)
    } else {
      router.replace('/(app)')
    }
    
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Sign In</Text>
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      
      {error && <Text style={styles.error}>{error}</Text>}
      
      <Button
        mode="contained"
        onPress={handleSignIn}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Sign In
      </Button>
      
      <Link href="/sign-up" asChild>
        <Button mode="text">Don't have an account? Sign Up</Button>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
}) 