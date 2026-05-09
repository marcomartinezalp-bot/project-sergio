//agrgar validacion con express-validator
const { body, validationResult } = require("express-validator"); 
const errorHandler = require("./errorHadler");

const validateUsuario = [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("email").isEmail().withMessage("El email no es válido"),
    body("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
    errorHandler
];