const {response} = require ('express')

//implantacion de los modulos
const Usuario = require ('../models/usuario')

//
const usuarioGet = async(res, res = response) => {
    //const {nombre} = reg.query // desestructuracion
    const usuario = await usuario.find()

    res.json({ //respuesta de json
    usuario
})
}
//metodo POST de la api
const usuarioPost = async (req, res) => {
    let mensaje = 'insercionexitosa'
    const body = req.body // captura el atributo
    console.log(body);
    try{
        const usuario = new Usuario(body)
        await usuario.save()//insertar coleccion
    } catch (error) {
        mensaje='error'

    }

    res.json({
    msg: 'inserción exitoda'
})
}
//metodo put
const usuarioPut = async(req, res = response) => {
    const {nombre, password, rol, estado} = req.query
    let mensaje = ' Modificación ecitosa'
    try{
        await Usuario.findOneAndUpdate({nombre: nombre},
        {passaword: passaword, rol:rol, estado:estado})
    }
    catch (error){
        mensaje = ' se presentaron problemas en la modificacion'
    }
    res.json({
    msg: 'modificación exitosa'    
    })
}
//metodo delete
const usuarioDelete = async (req, res) => {
    const {_id}= req.query 
    let mensaje = ' Se eliminó correctamente'

    try { 
        const usuario = await Usuario.deleteOne ({_id: _id})
    }
    catch(error){
        mensaje = 'Problemas en el proceso "Eliminar"'
    }
    res.json({
        msg:mensaje
    })
}


//metodo POST de la api 



module. exports = {
    usuarioGet,
    usuarioPost
}
