import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import routes from './routes'

const PORT = process.env.BACKEND_PORT

const app = express()
const server = http.createServer(app)
const corsOpts = { origin: '*', credentials: true }
const io = new Server(server, { cors: corsOpts })

app.use(cors(corsOpts))
app.use(express.json({ limit: '50mb' }))
app.use('/api/v1', routes)

io.on('connection', (client) => {
  // client.on("db.events", (model, event, data) => {
  //   client.broadcast.emit(`${model}.${event}`, data)
  // })
})

server.listen(PORT, function () {
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
})
