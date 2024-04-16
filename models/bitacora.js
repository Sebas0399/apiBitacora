const mongose=require('mongoose')
const bitacoraSchema=new mongose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    }
})
const Bitacora=mongose.model("Bitacora",bitacoraSchema)
module.exports=Bitacora;
