import * as SecureStore from 'expo-secure-store';

const URL = 'http://192.168.17.1:8080/'; 
const TIMEOUT = 5000; // en milisegundos

// status: string que dice el estado del server 
// ALIVE, ERROR, TIMEOUT, NOT_OK
// data: JSON que devuelve datos al cliente, en caso de no devolver datos
// lo devuelve igualmente pero vacio


// funcion que hace una request GET al servidor
// Se usa cuando quieres coger un dato sin mandar nada.
// devuelve un status y data.
// data: el json de datos.
async function GET(req) {
  const apiKey = await GET_API_KEY();
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), TIMEOUT);

  try {
    const response = await fetch(URL.concat(req), 
    {
      method: 'GET', 
      headers: {
        'authoritation': apiKey
      },
      signal: timeoutController.signal 
    });
    if (!response.ok) {
      if (response.status === 418)
        return {status:"BAD_API", code: response.status,  data: ""}      
      else
        return {status:"NOT_OK", code: response.status,  data: ""}
    }
    const json = await response.json();
    return {status:"ALIVE", code: response.status, data: json}
  } catch (error) {
    if (error.name === 'AbortError')
      return {status:"TIMEOUT", code: 1, data: "Timeout"}
    else 
      return {status:"ERROR", code: 1, data: "Error de red o server caido"}
  } finally {
    clearTimeout(timeoutId)
    console.log(`request GET finished`)
  }
}

// POST se usa para mandar datos y opcionalmente recibirlos.
// devuelve un status y un data.
async function POST(req, body) {
  const apiKey = await GET_API_KEY();
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), TIMEOUT);

  try {
    const response = await fetch(URL.concat(req), 
    { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authoritation': apiKey
      },
      body: JSON.stringify(body),
      signal: timeoutController.signal
    });
    if (!response.ok) {
      if (response.status === 418)
        return {status:"BAD_API", code: response.status,  data: ""}      
      else
        return {status:"NOT_OK", code: response.status,  data: ""}
    }
    const json = await response.json();
    return {status:"ALIVE", code: response.status,  data: json}
  } catch (error) {
    if (error.name === 'AbortError'){
      return {status:"TIMEOUT", code: 1, data: "Timeout"}
    }
    else {
      return {status:"ERROR", code: 1,  data: "Error de red o server caido"}
    }
  } finally {
    clearTimeout(timeoutId)
    console.log(`request POST finished`)
  }
}

// funcion que coje la API guardada en el almacenamiento local. Si no hay
// api key, mandará a una pestaña para introducirla. Se manda en los header
// de todas las peticiones
async function GET_API_KEY(){
  return await SecureStore.getItemAsync('api_key')
}

export { URL, GET, POST};