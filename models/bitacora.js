const mongose = require('mongoose')
const bitacoraSchema = new mongose.Schema({
    nroBitacora: {
        type: String,
        required: true

    },
    cliente: {
        type: String,
        unique: true,
        required: true
    }
})
const Bitacora = mongose.model("Bitacora", bitacoraSchema)
module.exports = Bitacora;
