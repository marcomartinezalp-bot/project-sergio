//agrgar validacion con express-validator
const { body, validationResult } = require("express-validator"); 
const errorHandler = require("./errorHadler");

const validateUsuario = [
    body("nombre").notEmpty().trim().withMessage("El nombre es obligatorio"),
    body("correo").isEmail().normalizeEmail().withMessage("El correo no es válido"),
    body("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
    errorHandler
];

module.exports = { validateUsuario };