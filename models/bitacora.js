const mongose = require('mongoose')
const bitacoraSchema = new mongose.Schema({
    nroBitacora: {
        type: String,
        required: true

    },
    cliente: {
        type: mongose.Schema.Types.ObjectId,
        ref:'Cliente',
        required: true
    },
    operacion: {
        type: mongose.Schema.Types.ObjectId,
        ref:'Operacion',
        required: true
    },
    referendo:{
        type:String,
        required:true
    },
    nroEntrega:{
        type:String,
        required:true
    },
    invoice:{
        type:String,
        required:true
    },
    dae:{
        type:String,
        required:true
    },
    liquidacion:{
        type:String,
        required:true
    },
    fechaTramite:{
        type:Date,
        required:true
    },
   
    status:{
        type:String,
        required:true
    },
    naviera:{
        type:String,
        required:true
    },
    almacenera:{
        type:String,
        required:true
    },
    observaciones:{
        type:String,
        required:true
    },
})
const Bitacora = mongose.model("Bitacora", bitacoraSchema)
module.exports = Bitacora;
