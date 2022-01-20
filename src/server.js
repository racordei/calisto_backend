require('dotenv').config({
  path: (process.env.NODE_ENV || 'development') == 'development'
    ? '../.env.dev'
    : (process.env.NODE_ENV == 'test' ? '.env.test' : '.env')
})

const PORT = process.env.BACKEND_EXPOSE_PORT || 3336

const express = require('express')
const http = require('http')
// const cors = require('cors')
const routes = require('./routes')
const { Server } = require('socket.io')

require('./database')

const app = express()
const server = http.createServer(app)
// const corsOpts = { origin: 'http://localhost:8080', credentials: true }
const io = new Server(server/*, { cors: corsOpts }*/)

// app.use(cors(corsOpts))
app.use(express.json({ limit: '50mb' }))
app.use(routes)

io.on('connection', (client) => {
  // client.on("db.events", (model, event, data) => {
  //   client.broadcast.emit(`${model}.${event}`, data)
  // })
})

server.listen(PORT, function () {
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
})