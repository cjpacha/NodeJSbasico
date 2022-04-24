// server-express.js

// primero instalar el paquete npm 
// npm install express --save    en tu terminal

const express = require('express')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
res.send('Hello World! Bienvenidos a  Node.js con apoyo de Tecnologias.pro')
})

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})

// Ejecutar en la terminal 
//  node server-express.js
