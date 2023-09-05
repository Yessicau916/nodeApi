const {Schema, model} = require ('mongoose')
//esquema de la base de datos, si abro llaves es por que sera un objeto
const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },

    password: {
        type: String,
        required : [true, 'la contraseña es obligatoria'],
        minlength:  [3,'debe tener minimo 3 caracteres'],
    },

    rol: {
        type: String,
        required: true,
        enum: ['Admin', 'Usuario']
    },

    estado:{
        type: Boolean,
        default: true,
        required: [true, 'el estado es obligatorio']
    }
})
//exportar la funcion UsuarioShema
mondule. ecports = model ('usuario', UsuarioSchema)