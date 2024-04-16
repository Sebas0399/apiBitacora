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
const Bitacora=require("./models/bitacora")
app.get("/bitacoras",async(req,res)=>{
    try{
        const existingBitacora=await Bitacora.find()
        res.json(existingBitacora)
    }
    catch{

    }
})
app.post("/bitacoras",async(req,res)=>{
    try{
        const {name}=req.body
        const saveBit=new Bitacora({
            name:"SAPO"
        })
        await saveBit.save()
      
        res.json(saveBit)
    }
    catch{

    }
})
module.exports = app;
