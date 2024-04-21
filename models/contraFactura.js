const mongose = require('mongoose')
const facturaSchema = new mongose.Schema({

    bitacora: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Bitacora',
        required: true
    },
    factura:{
        type: mongose.Schema.Types.ObjectId,
        ref: 'Factura',
        required: true
    },
    nroFactura:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    }
})
const ContraFactura = mongose.model("ContraFactura", facturaSchema)
module.exports = ContraFactura;
