const express = require('express')
const routes = require('./routes')


const HOST = '127.0.0.1'
const PORT = 3001


const api = express()

api.use((req, res, next) => {
    res.on('finish', () => console.log(`${req.method} ${req.url} [${res.statusCode}]`) );
    next()
})

api.use('/', routes)

api.listen(PORT, HOST, () => {
    console.log(`Server Listening on http://${HOST}:${PORT}`)
})

