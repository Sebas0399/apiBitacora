const express=require('express')
const app=express.Router()
const Cliente = require("../models/cliente")
app.post("/clientes", async (req, res) => {
    try {
        const { nombre } = req.body
        const saveCliente = new Cliente({
            nombre:nombre
        })
        await saveCliente.save()

        res.json(saveCliente)
    }
    catch(err) {
        console.log(err)
    }
})
app.get("/clientes", async (req, res) => {
    try {

        const allCliente = await Cliente.find()


        res.json(
            allCliente
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching clientes" });
    }
})
module.exports=app