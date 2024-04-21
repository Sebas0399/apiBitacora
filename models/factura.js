const mongose = require('mongoose')
const facturaSchema = new mongose.Schema({

    bitacora: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Bitacora',
        required: true
    },
    nroFactura:{
        type: String,
        required: true
    },
    valorFEE:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    }
})
const Factura = mongose.model("Factura", facturaSchema)
module.exports = Factura;
