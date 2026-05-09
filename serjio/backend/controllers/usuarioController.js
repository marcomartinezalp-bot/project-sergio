const Usuario = require("../models/USuarios");

exports.crearUsuario = async (req, res) => {
    const nuevo = new Usuario(req.body);
    await nuevo.save();
    res.json(nuevo);

};

exports.obtenerUsuarios = async (req, res)=> {
    const usuarios = await Usuario.find();
    res.json(usuarios);

};
//agregar validacion de express-validator y try-catch para manejo de errores para usuarioController.js
const { validationResult } = require("express-validator");
exports.crearUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const nuevo = new Usuario(req.body);
        await nuevo.save();
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.obtenerUsuarios = async (req, res)=> {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};