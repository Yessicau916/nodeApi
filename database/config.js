const mongose = require ('mongose')

const dbConection = async () => {
    try{
        mongose.connect(process.env.MONGO_CNN)
        console.long('Conexión exitosa a la base de datos mongo')
    }
    catch(error){
        console.log(error)
        //error conectado a la base de datos
    }
}

//exorta la funcion de conection 
module.exports = {dbConection}
