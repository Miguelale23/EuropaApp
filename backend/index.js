const express = require('express')
const sqlite3 = require('sqlite3')
const api = require('./api.js')

const app = express();
const PORT = 8080;

// middleware para parsear JSON
app.use(express.json())

// iniciar el server
app.listen(
    PORT, '0.0.0.0',
    () => console.log(`funcionando en http://localhost:${PORT}`)
)

// iniciar la database
const db = new sqlite3.Database('./data/europaDB.db', (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});


// ENDPOINTS 


// Hola
app.get('/hola', async (req, res) => { 
    await api.hola(req,res)
})

// LOGIN LOGIC
app.post('/login/:user', async (req, res) => {
    await api.login(db,req,res)
})