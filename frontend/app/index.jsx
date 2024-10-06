import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { GET }  from '../utils/API'
import * as SecureStore from 'expo-secure-store';
import Api_key_tab from './api_key_tab';

// DEBUG DE COJONES
async function clearSecureStore() {
  SecureStore.deleteItemAsync('username')
  SecureStore.deleteItemAsync('password')
  SecureStore.deleteItemAsync('api_key')

  console.log("CLEARED CREDENTIALS")
}


// la primera pagina al abrir la app. Comprueba si el server esta vivo mandando
// un GET de prueba. Si esta vivo, pasa a la pestaña de login, si no vuelve a probar.
export default function Index(){
  const [apiKeyReady, setApiKeyReady] = useState(false)
  const [serverStatus, setServerStatus] = useState([]);


  useEffect(() =>{
    const fetchSavedKey = async() =>{
      const key = await SecureStore.getItemAsync('api_key')

      if (!key){
        setApiKeyReady(false)
        router.replace('api_key_tab')
      } else {
        setApiKeyReady(true)
      }
    }

    fetchSavedKey()
  }, []) 

  useEffect(() =>{ 
    const fetchData = async () =>{
      const result = await GET("hola")
      setServerStatus(result.status.concat(" intentando de nuevo..."))

      console.log(result)
      if (result.status === 'ALIVE')
      {
        console.log("SERVER ALIVE")
        router.replace('login_tab')
      }
      else if (result.code === 418) // mal api key
        router.replace('api_key_tab')
      else
        fetchData()
    }

    if (apiKeyReady)
      fetchData();
    clearSecureStore();
  }, [apiKeyReady])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size='large' color='#00ff00'/>
      <Text>{serverStatus}</Text>
    </View>
  );
}