const mongose = require('mongoose')
const clienteSchema = new mongose.Schema({

    nombre: {
        type: String,
        required: true,
        unique: true
    },
    tramites: [{
        type: mongose.Schema.Types.ObjectId,
        ref:'Bitacora'
    }]

})
const Cliente = mongose.model("Cliente", clienteSchema)
module.exports = Cliente;
