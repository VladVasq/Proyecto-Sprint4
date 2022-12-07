const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    id_user:{type: String, required: true},
    date:{type: Date, required: true},
    hours:{type: String,required: true}, 
    largo:{type: Number,required: true},
    Ancho:{type: Number,required: true},
    Alto:{type: Number,required: true},
    peso:{type: Number,required: true},
    Delicado:{type: String, required: true},
    DirRecogida:{type: String, required: true},
    CiudadRecogida:{type: String, required: true},
    usuarioEnviado:{type: String, required: true},
    DocRem:{type: Number,required: true},
    DirEnvio:{type: String, required: true},
    CiudadEnvio:{type: String, required: true},
    Estado:{type: String, required: true}
}, { timestamps: true })

module.exports= mongoose.model('order',orderSchema);  