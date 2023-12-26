const express = require('express')
const app = express()
const PORT = 3000


// Ruta de inicio
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchado en http://localhost:${PORT}`)
})

// Ruta con parametro
app.get('/suma/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const suma = num1 + num2
    res.send(`La suma de ${num1} y ${num2} es ${suma}`)
})

// Middleware para registrar las solicitudes
app.arguments((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`)
    next()
})

// Ruta con middleware especifico
app.get('/mensaje', (req, res) => {
    res.send('Este es un mensaje de la ruta /mensaje')
})

// Middleware para menejar errores
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Algo salio mal')
})

// Ruta para provocar un error
app.get('/error', (req, res, next) => {
    next(new Error('Este es un error provocado.'))
})

