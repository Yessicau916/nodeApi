require('dotenv').config()//implatar paquete dotenv
const Server = require ('./models/server')
const server = new Server ()// instancia a objeto server
server.listen()//iniciar servidor locar