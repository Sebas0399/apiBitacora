const express=require('express')
const app=express.Router()
const Bitacora = require("../models/bitacora")
const generateNumBitacora = async () => {
    const bi =await Bitacora.find({}).sort({_id: -1}).limit(1)
    console.log(bi)
    if(bi.length==0){
        return '24-001'
    }
    return parseInt(bi[0].nroBitacora)+1
}

app.get("/bitacoras", async (req, res) => {
    try {
        await generateNumBitacora()

        const existingBitacora = await Bitacora.find()
        .populate('cliente','nombre')
        .populate('operacion','nombre')
        .sort({nroBitacora:-1})
            .limit(600);

        
        res.json(
            existingBitacora
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching bitacoras" });
    }
})
app.post("/bitacoras", async (req, res) => {
    try {
        const { cliente,operacion } = req.body
        const saveBit = new Bitacora({
            nroBitacora: await generateNumBitacora(),
            cliente: cliente,
            fechaTramite:new Date().setUTCHours(new Date().getUTCHours()-5),
            operacion:operacion,
            status:"PENDIENTE"
        })
        await saveBit.save()

        res.json(saveBit)
    }
    catch(err) {
        console.log(err)
    }
})
app.get("/bitacoras/:clienteId", async (req, res) => {
    try {
        const clienteId=req.params.clienteId
        const bitacorasCliente = await Bitacora.find({cliente:clienteId}).populate('cliente','nombre')
        res.json(
            bitacorasCliente
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching clientes" });
    }
})
module.exports=app