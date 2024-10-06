import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Touchable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router'
import * as SecureStore from 'expo-secure-store';


export default function Api_key_tab(){
    const [textApi, setTextApi] = useState('')

    async function handleConfirm(){
        // q no este vacio
        if (!textApi){ 
            Alert.alert('Texto vacío', 'Introduce el código de 36 carácteres')
            return
        }
        // comprobar que tiene suficiente longitud
        if (textApi.length !== 36){
            Alert.alert('Longitud no suficiente', 'Comprueba que la hayas puesto bien, tiene que ser 36 carácteres de longitud')
            return
        }
        
        await SecureStore.setItemAsync('api_key', textApi)
        Alert.alert('Exito', 'Api key cambiada con exito')
        router.replace('login_tab')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Introduzca la ApiKey</Text>
            <TextInput style={styles.input} placeholder="escribe aqui" onChangeText={setTextApi}></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}

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