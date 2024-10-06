import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react'
import { router } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { POST } from '../utils/API'


export default function Login_tab() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [credentialsLoaded, setCredentialsLoaded] = useState(false);

    useEffect(() =>{
        const getSavedCredentials = async () => {

          const user = await SecureStore.getItemAsync('username')
          const password = await SecureStore.getItemAsync('password')

          if (user !== null && password !== null)
          {
            setUsername(user)
            setPassword(password)
            
            setCredentialsLoaded(true)
          }
        }

        getSavedCredentials();
    }, [])

    // Ejecuta handleLogin cuando las credenciales estan cargadas y si existen
    useEffect(() => {
      if (credentialsLoaded) {
          handleLogin();
      }
  }, [credentialsLoaded])

    async function handleLogin() {
      // si no ha introducido usuario o contraseña
      if (!username || !password) {
        Alert.alert('Error', 'Introduzca usuario y contraseña.');
        return;
      }

      const result = await POST(("login/").concat(username), { password: password })
      if (result.status != "ALIVE"){
        if (result.status === "BAD_API"){
          Alert.alert('Error', 'API mal puesta, redirigiendo a página de introducción de API')
          router.replace('api_key_tab')
          return
        }
        Alert.alert('Error', 'Error, server status: '.concat(result.status))
        return;
      }

      if (result.data.result === "SUCCESS"){
        SecureStore.setItem('username', username)
        SecureStore.setItem('password', password)

        router.replace('main_tab')
      }
      else{
        Alert.alert('Error', `Inicio de sesión inválido: ${result.data.result}`)
      }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{handleLogin()}}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
