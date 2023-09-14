const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    idrol: {
        type: Number,
        required: true,
      },
      nombrerol: {
        type: String,
        required: true
      },
      descrol: {
        type: String,
        required: true
    
      },
      permisosrol: {
        type: String,
        required: true
    
      }
})

//Exportar la función UsuarioSchema
module.exports = model('Usuario',UsuarioSchema)

