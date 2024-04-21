const express = require('express')
const bodyParser = require('body-parser')
const mongose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000
const cors = require('cors')
//
const BitacoraRoute=require('./routes/bitacoras')
const ClienteRoute=require('./routes/clientes')
const OperacionRoute=require('./routes/operaciones')

//
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

app.use(BitacoraRoute)
app.use(ClienteRoute)
app.use(OperacionRoute)





module.exports = app;
