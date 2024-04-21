const mongose = require('mongoose')
const operacionSchema = new mongose.Schema({

    nombre: {
        type: String,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
        unique: true
    },

})
const Operacion = mongose.model("Operacion", operacionSchema)
module.exports = Operacion;
