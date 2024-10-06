const fs = require('fs').promises;
const path = require('path');

const PATH_TO_KEY = path.join(__dirname, 'data/apikey.txt')
// devuelve true si esta bien, o false si esta mal
async function checkApiKey(req){
    const API_KEY = await fs.readFile(PATH_TO_KEY, 'utf8')

    return (req.headers['authoritation'] === API_KEY)
}

async function hola(req,res){
    
    if (await checkApiKey(req))
    {
        res.status(200).send({
            hola: "hola"
        })
    }
    else{
        res.status(418).send()
    }
}

async function login(db, req, res){
    if (await checkApiKey(req,res))
    {
        const { user } = req.params;
        const { password } = req.body;
    
        // cogemos la password de la base de datos
        const getPassword = (username) => {
            return new Promise((resolve, reject) => {
                const sql = "SELECT password FROM users WHERE name = ?";
                db.get(sql, [username], (err, row) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(row);
                });
            });
        };
    
        try {
            // esperamos a que se resuelva la promesa
            const row = await getPassword(user);
    
            if (row) {
                if (password === row.password) {
                    res.status(200).send({ result: 'SUCCESS' });
                } else {
                    res.json({ result: 'CONTRASEÑA_ERRONEA' });
                }
            } else {
                res.json({ result: 'USUARIO_INEXISTENTE' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ result: 'ERROR' });
        }
    }
    else
    {
        res.status(418).send()
    }
}


module.exports = { login, hola }