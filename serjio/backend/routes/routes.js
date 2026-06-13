const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/usuarioController");
const { validateUsuario } = require("../validator/validation");

router.post("/usuarios", validateUsuario, userCtrl.crearUsuario);
router.get("/usuarios", userCtrl.obtenerUsuarios);
router.post("/login", userCtrl.loginUsuario);

module.exports = router;
