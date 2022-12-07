const express=require('express');
const orderSchema = require('../models/ordenes');

const router =express.Router();
// Registrar orden
router.post("/orders",(req,res)=>{
    const order = orderSchema(req.body);
    order
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
    
});
//obtener datos
router.get("/orders",(req,res)=>{
    orderSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
    
});
// Obtener usuario en especifico
router.get("/orders/:id",(req,res)=>{
    const { id }= req.params;
    orderSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
})
//actualizar datos
router.put("/orders/:id",(req,res)=>{
    const { id } = req.params;
    const {date, hours, largo, Ancho, Alto, peso, Delicado,DirRecogida, CiudadRecogida, 
        usuarioEnviado, DocRem,  DirEnvio,  CiudadEnvio, Estado} = req.body;
    orderSchema
    .updateOne({_id: id},{$set:{date, hours, largo, Ancho, Alto, peso, Delicado,DirRecogida, CiudadRecogida, 
        usuarioEnviado, DocRem,  DirEnvio,  CiudadEnvio, Estado}})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
    return res.json('Orden Actualizada' );
});
//Eliminar datos
router.delete("/orders/:id",(req,res)=>{
    const { id } = req.params;
    orderSchema
    .remove({_id: id},)
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
});
module.exports = router;