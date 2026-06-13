const Usuario = require("../models/Usuarios");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.crearUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { nombre, correo, password } = req.body;
        
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El correo ya está registrado" });
        }
        
        // Encriptar contraseña
        const passwordEncriptada = await bcrypt.hash(password, 10);
        
        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            password: passwordEncriptada
        });
        
        await nuevoUsuario.save();
        res.status(201).json({ 
            message: "Usuario creado exitosamente",
            usuario: { id: nuevoUsuario._id, nombre: nuevoUsuario.nombre, correo: nuevoUsuario.correo }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.obtenerUsuarios = async (req, res)=> {
    try {
        const usuarios = await Usuario.find().select("-password");
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginUsuario = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        res.json({ message: "Autenticación exitosa", usuario: { id: usuario._id, nombre: usuario.nombre, correo: usuario.correo } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};