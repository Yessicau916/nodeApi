const cookieParser = require ('cookie-parser') // datos
const express= require('express')// permite ejecutar o servidor de node
const cors = require('cors');// implementar seguridad
const bodyParser = require (' body-parser')// datos desde formularios html
const {dbConnection}= require('../database/config')

class Server{
    constructor(){
        this.app = express ()//especifica donde utiliza el express
        this.port = process.env.PORT //capturando variables del puerto
        this.usuarioPath = '/api/usuario' // ruta publica 
        this.conectarDB()
        this.routes()
    }

    listen(){
        this.app.ñisten(this.port, () => {
            console.log(`escuchando por el puerto $(this.port}`)
        })
    }
}
