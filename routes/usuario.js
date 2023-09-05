//destructuracion. extraer un atributo de un objetoconst {Router} = require ('express')

const route =nRouter ()

//importar metodos del controlador
const {usuarioGet,usuarioPost,usuarioPut,usuarioDelete} = require ('../controllers/usuario')

route.get ('/', usuarioGet) //listar datos
route.post ('/', usuarioPost) //insertar datos
route.put ('/', usuarioPut)//modificar datos
route.delete('/', usuarioDelete)//eliminar daros


module.exports = route
