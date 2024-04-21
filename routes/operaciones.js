const express=require('express')
const app=express.Router()
const Operacion = require("../models/operacion")

app.post("/operaciones", async (req, res) => {
    try {
        const { nombre,codigo } = req.body
        const saveOperacion = new Operacion({
            nombre:nombre,
            codigo:codigo
        })
        await saveOperacion.save()

        res.json(saveOperacion)
    }
    catch(err) {
        console.log(err)
    }
})
app.get("/operaciones", async (req, res) => {
    try {

        const allOperaciones = await Operacion.find()


        res.json(
            allOperaciones
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching operaciones" });
    }
})
module.exports=app