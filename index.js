const express = require('express')
const bodyParser = require('body-parser')
const mongose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const jwt = require('jsonwebtoken')

mongose.connect("mongodb+srv://sebas:S8SqVZfVZUJlJOZx@cluster0.yjcnpdr.mongodb.net/Intraservice?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado")
}).catch((err) => {
    console.log("Error")

})
app.listen(port, () => {
    console.log("server is running")
})

const Bitacora = require("./models/bitacora")
app.get("/bitacoras", async (req, res) => {
    try {
        await generateNumBitacora()

        const existingBitacora = await Bitacora.find().sort({nroBitacora:-1})
            .limit(600);


        res.json(
            existingBitacora
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching bitacoras" });
    }
})
const generateNumBitacora = async () => {
    console.log("GENERANDO")
    const bi =await Bitacora.find({}).sort({_id: -1}).limit(1)
    return parseInt(bi[0].nroBitacora)+1
}
const getFechaActual=()=>{
    const fecha=new Date()
    
}
app.post("/bitacoras", async (req, res) => {
    try {
        const { cliente,operacion } = req.body
        console.log(req.body)
        const saveBit = new Bitacora({
            nroBitacora: await generateNumBitacora(),
            cliente: cliente,
            fechaTramite:new Date().setUTCHours(new Date().getUTCHours()-5),
            operacion:operacion,
            status:"PENDIENTE"
        })
        console.log(saveBit)
        await saveBit.save()

        res.json(saveBit)
    }
    catch(err) {
        console.log(err)
    }
})
module.exports = app;
