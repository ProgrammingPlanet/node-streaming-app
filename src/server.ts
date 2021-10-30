import * as express from 'express'
import routes from './routes'

const HOST = '127.0.0.1'
const PORT = 3001


const api = express()

api.use('/', routes)

api.listen(PORT, HOST, () => {
    console.log(`Server Listening on http://${HOST}:${PORT}`)
})